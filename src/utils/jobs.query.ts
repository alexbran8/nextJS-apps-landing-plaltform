import gql from 'graphql-tag';

export const JOBS_QUERY = gql`
  query {
    getAllApps {
         id
      title
      url
   
  }

}
`;

// TODO: create new query



// TODO: export query
export default JOBS_QUERY;
