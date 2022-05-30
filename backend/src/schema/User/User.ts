import { builder } from '..'

export const User = builder.prismaNode('User', {
  findUnique: id => ({ id }),
  id: { resolve: user => user.id },
  fields: t => ({
    username: t.exposeString('username'),
  })
})
