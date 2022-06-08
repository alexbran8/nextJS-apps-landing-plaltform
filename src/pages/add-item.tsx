import { useRouter } from "next/router";
import { Form } from "../layout/form-component/Form";


export default function AddItem() {
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  const url = query.url;

  return (
    <div>
      <h1>Add Item</h1>
      <Form />
      <h2>
        Name: <span>{name}</span>
        <br></br>
        URL: <span>{url}</span>
      </h2>
    </div>
  );
}

export async function getServerSideProps  (context) {
  console.log(context.query) 
  return {
      props: { 
         title: context.query.name, 
         url: context.query.url
      }
  }
}