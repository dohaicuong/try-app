import { useSnackbar } from 'notistack'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { HomeQuery } from './__generated__/HomeQuery.graphql'

const Home = () => {
  const data = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        me { id }
      }
    `,
    {}
  )

  const { enqueueSnackbar } = useSnackbar()

  console.log(data.me?.id)

  return (
    <>
      Home
      <button onClick={() => enqueueSnackbar('Hello there!', { variant: 'success' })}>
        hello
      </button>
    </>
  )
}

export default Home
