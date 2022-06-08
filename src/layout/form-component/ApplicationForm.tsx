// import { useForm } from "react-hook-form";
// import "./style-form.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@mui/material";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  form: {
    padding: 10,
  },
});

// TODO: 1. update form fields with ones correspondent to the application lista table (url, title, etc.)
// TODO: 2. check form validation
// TODO: 3. add default values to form fields as being props passed from parent component

export const ApplicationForm = (props) => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [comments, setComments] = useState("");
  const [details, setDetails] = useState("");

  const [titleErr, setTitleErr] = useState(false);
  const [urlErr, setUrlErr] = useState(false);
  const [commentsErr, setCommentsErr] = useState(false);
  const [detailsErr, setDetailsErr] = useState(false);

  console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleErr(false);
    setUrlErr(false);
    setCommentsErr(false);
    setDetailsErr(false);

    if (title == "") {
      setTitleErr(true);
    }

    if (url == "") {
      setUrlErr(true);
    }

    if (comments == "") {
      setCommentsErr(true);
    }

    if (details == "") {
      setDetailsErr(true);
    }

    if (title && url && comments && details) {
      console.log(title, url, comments, details);
    }
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        className={classes.field}
        label="Title:"
        variant="outlined"
        color="primary"
        required
        fullWidth
        error={titleErr}
        defaultValue={props.title}
      />
      <TextField
        onChange={(e) => setUrl(e.target.value)}
        className={classes.field}
        label="URL:"
        variant="outlined"
        color="primary"
        required
        fullWidth
        error={urlErr}
        defaultValue={props.url}
      />
      <TextField
        onChange={(e) => setComments(e.target.value)}
        className={classes.field}
        label="Comments:"
        name="Comments"
        inputProps={{ pattern: "/^[^@]{1,64}@[^@]{4,253}$/" }}
        autoComplete="Comments"
        variant="outlined"
        color="primary"
        required
        fullWidth
        error={commentsErr}
      />
      <TextField
        onChange={(e) => setDetails(e.target.value)}
        className={classes.field}
        label="Details"
        variant="outlined"
        color="primary"
        multiline
        minRows={4}
        fullWidth
        required
        error={detailsErr}
      />
      <Button type="submit" color="primary" variant="contained">
        Save
      </Button>
    </form>
  );
};



// import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
//  import { FormControl } from "@mui/material"
// const useStyles = makeStyles((theme) => {
//   root: {
//     display: "flex";
//     flexDirection: "column";
//     justifyContent: "center";
//     alignItems: "center";
//     padding: theme.spacing(2);
//   }
// });
// export const Form = () => {
//   const { handleSubmit } = useForm();
//   const [userInfo, setUserInfo] = useState();
//   const classes = useStyles();

//   const onSubmit = (data) => {
//     setUserInfo(data);
//     console.log(data);
//   };

//   return (
//     <form className={classes["root"]} onSubmit={handleSubmit(onSubmit)}>
//       {/* <FormControl
//         name="firstName"
//         defaultValue=""
//         render={({ field: { onChange, value }, fieldState: { error } }) => (
//           <TextField
//             label="First Name"
//             variant="filled"
//             value={value}
//             onChange={onChange}
//             error={!!error}
//             helperText={error ? error.message : null}
//           />
//         )}
//         rules={{ required: "First name required" }}
//       />
//       <FormControl
//         name="lastName"
//         defaultValue=""
//         render={({ field: { onChange, value }, fieldState: { error } }) => (
//           <TextField
//             label="Last Name"
//             variant="filled"
//             value={value}
//             onChange={onChange}
//             error={!!error}
//             helperText={error ? error.message : null}
//           />
//         )}
//         rules={{ required: "Last name required" }}
//       />
//       <FormControl
//         name="email"
//         defaultValue=""
//         render={({ field: { onChange, value }, fieldState: { error } }) => (
//           <TextField
//             label="Email"
//             variant="filled"
//             value={value}
//             onChange={onChange}
//             error={!!error}
//             helperText={error ? error.message : null}
//             type="email"
//           />
//         )}
//         rules={{ required: "Email required" }}
//       />
//       <FormControl
//         name="age"
//         defaultValue="0"
//         render={({ field: { onChange, value }, fieldState: { error } }) => (
//           <TextField
//             label="Age"
//             variant="filled"
//             value={value}
//             onChange={onChange}
//             error={!!error}
//             helperText={error ? error.message : null}
//             type="age"
//           />
//         )}
//         rules={{ required: "Age required" }}
//       /> */}

//       <div>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           Send
//         </Button>
//       </div>
//     </form>
//   );
// };
// return (
//   <div className="container">
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h1>Report Issues</h1>
//       <div className="ui divider"></div>
//       <div className="ui form">
//         <div className="field">
//           <label>Firstname</label>
//           <input
//             type="text"
//             {...register("Firstname is required", { required: true })}
//           ></input>
//         </div>
//         <p>{errors.firstname?.message}</p>
//         <div className="field">
//           <label>Lastname</label>
//           <input
//             type="text"
//             {...register("Lastname is required", { required: true })}
//           ></input>
//         </div>
//         <p>{errors.lastname?.message}</p>
//         <div className="field">
//           <label>Email</label>
//           <input
//             type="text"
//             {...register("Email is required", {
//               required: true,
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: "This is not a valid email",
//               },
//             })}
//           ></input>
//         </div>
//         <p>{errors.email?.message}</p>
//         <div className="field">
//           <label>Age</label>
//           <input
//             type="number"
//             {...register("Age is required", {
//               required: true,
//               maxLength: 100,
//             })}
//           ></input>
//         </div>
//         <p>{errors.age?.message}</p>
//         <div className="field">
//           <label>Comm</label>
//           <textarea
//             {...register("Let us know what you think...", {
//               required: true,
//               minLength: 0,
//               maxLength: 100,
//             })}
//           ></textarea>
//         </div>
//         <button className="fluid ui button blue">Submit</button>
//       </div>
//     </form>
//   </div>
// );
