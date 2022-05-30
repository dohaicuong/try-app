import { YogaInitialContext } from '@graphql-yoga/node'
import { IncomingMessage, ServerResponse } from 'http'

import { parseAuthHeader } from './jwt'

type InitContext = YogaInitialContext & {
  req: IncomingMessage
  res: ServerResponse
}

export type Context = {
  userId: string | undefined
}

export const context = ({ req }: InitContext): Context => {
  const jwtPayload = parseAuthHeader(req.headers.authorization)

  return {
    userId: jwtPayload?.sub,
  }
}
