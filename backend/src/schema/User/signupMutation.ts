import { builder } from '..'
import { prisma } from '../../clients/prisma'

import bcrypt from 'bcrypt'
import { signToken } from '../../context/jwt'

import { User } from './User'
import { ErrorInterface } from '../Error'

class UserExistedError extends Error {
  constructor(username: string) {
    super()

    this.message = `username ${username} is already existed`
  }
}
builder.objectType(UserExistedError, {
  name: 'UserExistError',
  interfaces: [ErrorInterface],
})

builder.relayMutationField(
  'signup',
  {
    inputFields: t => ({
      username: t.string({ required: true }),
      password: t.string({ required: true }),
    })
  },
  {
    errors: { types: [UserExistedError] },
    resolve: async (_, { input }) => {
      const isExisted = await prisma.user.findUnique({ where: { username: input.username }})
      if (Boolean(isExisted)) throw new UserExistedError(input.username)

      const hashedPassword = await bcrypt.hash(input.password, 10)

      return prisma.user.create({
        data: {
          username: input.username,
          password: hashedPassword,
        }
      })
    }
  },
  {
    outputFields: t => ({
      user: t.field({
        type: User,
        resolve: user => user
      }),
      token: t.string({
        resolve: ({ id }) => signToken({ sub: id })
      }),
    })
  }
)
