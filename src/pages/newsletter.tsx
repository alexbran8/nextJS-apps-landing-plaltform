import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
// import { useQuery } from "@apollo/react-hooks";
// import JOBS_QUERY from "../utils/jobs.query";
// import { ApolloClient } from "@apollo/client";
import { Form } from "../layout/form-component/Form";
// import error from "next/error";
const Newsletter = () => {
  // const { data, loading, error } = useQuery(JOBS_QUERY);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {JSON.stringify(error)}</p>;
  // }
  return (
    <Main meta={<Meta title="Newsletter" description="Lorem ipsum" />}>
      {/* <h1>Here you cand find all you need to know about React</h1> */}
      <Form />
    </Main>
  );
};

export default Newsletter;