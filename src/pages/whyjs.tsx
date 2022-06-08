import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

import { useQuery } from '@apollo/react-hooks';
// TODO: import new query
import JOBS_QUERY from '../utils/jobs.query';
// import { GetStaticProps } from 'next';


// import { gql, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// import apolloClient from 'apollo-client';



import client from "../../utils/apollo-client";


// TODO: use onb query in SSR and the other in CSR
// SSR
// export async function getServerSideProps() {
export async function getServerSideProps() {
  // console.log(props)
  const { data: ssrQueryData } = await client.query({
    query: JOBS_QUERY,
    // variables: { product_id: 2 },
  });
  return {
    props:
      { items: ssrQueryData }
  }
}


export default function WhyJS( {items}:any ) {

  console.log(items)

    // CSR
    const { data: csrData }
    // loading, error, refetch }
     = useQuery(JOBS_QUERY, {
    // variables: { first: 100, task: task, status: status, week: week, date: date, responsible_entity: responsible, no_incident: no_incident, site: site }, 
    onCompleted: (
    ) => {
      console.log(csrData)

    },
    onError: (error) => {console.log(error)}
});

  return (
    <Main meta={<Meta title="Why Modern JS?" description="Lorem ipsum" />}>
      
      <div className="container">
        <div className="typed-out">Why Modern JS? Simply because it is so powerfull?</div>
      </div>
    </Main>
  )
};

