import { Environment, FetchFunction, Network, RecordSource, Store, Variables } from 'relay-runtime'
import { RelayEnvironmentProvider } from 'react-relay'

const fetchGraphQL = async (query: string, variables: Variables) => {
  return fetch(import.meta.env.VITE_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then(res => res.json())
}

const fetchRelay: FetchFunction = async (params, variables) => {
  if (!params.text) return
  return fetchGraphQL(params.text, variables)
}

export const environment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})

type RelayProviderProps = {
  children?: React.ReactNode
}

export const RelayProvider: React.FC<RelayProviderProps> = ({ children }) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
