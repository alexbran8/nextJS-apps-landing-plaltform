import gql from 'graphql-tag';

const JOBS_QUERY = gql`
  query {
    getAllApps {
         id
      title
   
  }
}
`;

export default JOBS_QUERY;