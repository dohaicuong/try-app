import SchemaBuilder from '@pothos/core'
import { Context } from '../context'

import PrismaPlugin from '@pothos/plugin-prisma'
import { prisma } from '../clients/prisma'
import type PrismaTypes from '../../prisma/pothos-types'

import RelayPlugin from '@pothos/plugin-relay'
import ErrorsPlugin from '@pothos/plugin-errors'

type SchemaTypes = {
  Context: Context
  PrismaTypes: PrismaTypes
}
export const builder = new SchemaBuilder<SchemaTypes>({
  plugins: [PrismaPlugin, RelayPlugin, ErrorsPlugin],
  prisma: {
    client: prisma,
  },
  relayOptions: {
    clientMutationId: 'omit',
  },
  errorOptions: {
    defaultTypes: [],
  },
})

builder.queryType({})
builder.mutationType({})

import './Error'
import './User'

export const schema = builder.toSchema({})
