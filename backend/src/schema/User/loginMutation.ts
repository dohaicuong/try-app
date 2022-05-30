import { builder } from '..'
import { prisma } from '../../clients/prisma'

import bcrypt from 'bcrypt'
import { signToken } from '../../context/jwt'

import { User } from './User'
import { ErrorInterface } from '../Error'

class WrongCredentialsError extends Error {
  constructor() {
    super()

    this.message = `Wrong credentials!`
  }
}
builder.objectType(WrongCredentialsError, {
  name: 'WrongCredentialsError',
  interfaces: [ErrorInterface],
})

builder.relayMutationField(
  'login',
  {
    inputFields: t => ({
      username: t.string({ required: true }),
      password: t.string({ required: true }),
    })
  },
  {
    errors: { types: [WrongCredentialsError] },
    resolve: async (_, { input }) => {
      const user = await prisma.user.findUnique({ where: { username: input.username }})
      if (!user) throw new WrongCredentialsError()

      const isMatchPassword = await bcrypt.compare(input.password, user.password)
      if (!isMatchPassword) throw new WrongCredentialsError()

      return user      
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
