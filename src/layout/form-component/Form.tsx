
import { useForm } from "react-hook-form";
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

export const Form = (props) => {
  const classes = useStyles();

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const [lastnameErr, setLastnameErr] = useState(false);
  const [firstnameErr, setFirstnameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [detailsErr, setDetailsErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLastnameErr(false);
    setFirstnameErr(false);
    setEmailErr(false);
    setDetailsErr(false);

    if (lastname == "") {
      setLastnameErr(true);
    }

    if (firstname == "") {
      setFirstnameErr(true);
    }

    if (email == "") {
      setEmailErr(true);
    }

    if (details == "") {
      setDetailsErr(true);
    }

    if (lastname && firstname && email && details) {
      console.log(lastname, firstname, email, details);
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
        onChange={(e) => setLastname(e.target.value)}
        className={classes.field}
        label="FirstName:"
        variant="outlined"
        color="primary"
        required
        fullWidth
        error={lastnameErr}
      />
      <TextField
        onChange={(e) => setFirstname(e.target.value)}
        className={classes.field}
        label="LastName:"
        variant="outlined"
        color="primary"
        required
        fullWidth
        error={firstnameErr}
      />
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        className={classes.field}
        label="Email:"
        name="email"
        inputProps={{ pattern: "/^[^@]{1,64}@[^@]{4,253}$/" }}
        autoComplete="email"
        variant="outlined"
        color="primary"
        required
        fullWidth
        error={emailErr}
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
        Send
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
