import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {

  const { data, loading, error} = useQuery(HELLO_QUERY)

  if(loading) return <div>Loading...</div>

  return (
    <div>
      {data.sayHello}
    </div>
  )
}

export default withApollo(Home);