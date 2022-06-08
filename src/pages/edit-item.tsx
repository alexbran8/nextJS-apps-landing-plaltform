import { useRouter } from "next/router";
import { ApplicationForm } from "../layout/form-component/ApplicationForm";



export default function EditItem() {
  const router = useRouter();
  const query = router.query;
  const title = query.title;
  const url = query.url;

  return (
    <div>
      {/* <h1>Edit Item</h1> */}
      <ApplicationForm
      url={url} 
      title={title}
      />
      {/* <h2>
        Name: <span>{title}</span>
        <br></br>
        URL: <span>{url}</span>
      </h2> */}
    </div>
  );
}

// export async function getServerSideProps  (context) {
//   console.log(context.query) 
//   return {
//       props: { 
//         title: context.query.title, 
//          url: context.query.url
//       }
//   }
// }