import { sign, verify } from 'jsonwebtoken'

type JwtPayload = {
  sub: string
}

const SECRET = 'JWT_SECRET_HERE'

export const signToken = (payload: JwtPayload) => sign(payload, SECRET)

export const verifyToken = (token: string) => {
  try {
    return verify(token, SECRET) as JwtPayload
  }
  catch(error) {
    console.log(error)
    return undefined
  }
}

export const parseAuthHeader = (auth: string | undefined) => {
  if (!auth) return

  const isBearer = auth.indexOf('Bearer ') === 0
  if (!isBearer) return

  const token = auth.replace('Bearer ', '')
  const jwtPayload = verifyToken(token)
  return jwtPayload
}
