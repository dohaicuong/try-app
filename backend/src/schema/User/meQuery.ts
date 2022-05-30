import { builder } from '..'
import { prisma } from '../../clients/prisma'

import { User } from './User'

builder.queryField('me', t => t.field({
  type: User,
  description: 'User with jwt',
  nullable: true,
  resolve: (_, __, { userId }) => {
    if (!userId) return
    return prisma.user.findUnique({ where: { id: userId }}) 
  }
}))
