import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { useQuery } from '@apollo/react-hooks';
//TODO: import new query
//import SECOND_JOBS_QUERY from '../utils/jobs.query';
import {JOBS_QUERY} from '../utils/jobs.query';
import { GetStaticProps } from 'next';
//import { ggl, ApolloClient, HttpLink, InMemoryCache } from '@apollo-client';
import ApolloClient from 'apollo-client';
import client from "../../utils/apollo-client";


//TODO: use onb query in SSR and the other in CSR
// SSR
// export async function getServerSideProps() {
  export async function getServerSideProps() {
    // console.log(props)
    const { data: ssrQueryData } = await client.query({
      query: JOBS_QUERY
      // variables: { product_id: 2},
    });
    return {
      props:
      {items: ssrQueryData}
    }

  }


  export default function ReportIssue ({items}: any) {

    console.log(items)

    const { data: csrData } = useQuery(JOBS_QUERY, {
      onCompleted: (
      ) => {
        console.log(csrData)
        // setItems(data.getAll)
  
      }
    });
  

  return (
  <Main meta={<Meta title="Report Issue" description="Lorem ipsum" />}>
    <h1>This is where you can report any issue with existing tools</h1>
  </Main>

  )
  };

//export default RequestSupport;
