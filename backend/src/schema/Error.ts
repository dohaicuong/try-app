import { builder } from '.'

export const ErrorInterface = builder
  .interfaceRef<Error>('Error')
  .implement({
    fields: t => ({
      message: t.exposeString('message'),
    })
  })

builder.objectType(Error, {
  name: 'BaseError',
  interfaces: [ErrorInterface],
})
