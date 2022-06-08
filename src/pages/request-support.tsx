import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
// import { useQuerry, useQuery } from '@apollo/react-hooks';
// import JOBS_QUERY from '../utils/jobs.query';
const RequestSupport = () => (
 // const { data, loading, error } = useQuery(JOBS_QUERY);
  <Main
    meta={
      <Meta
        title="Support Request"
        description="on this page you can request support"
      />
    }
  >
    <h1>
      This is where you can see all the existing requests, their status and
      expected implementation. You can also request for support here.
    </h1>
  </Main>
);

export default RequestSupport;
