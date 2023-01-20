import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { gql, useMutation } from "@apollo/client";

const styles = {
  container: {
    width: "100%",
    marginTop: "60px",
    textAlign: "center",
  },
  title: {
    fontSize: "25px",
    fontWeight: "600",
    marginBottom: "20px",
    textDecoration: "underline",
  },
  formContainer: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  },
  textField: {
    marginBottom: "20px",
  },
};

const initialValue = {
  username: "",
  email: "",
  password: "",
};

const registerMutation = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`;

const Register = () => {
  const [values, setValues] = useState(initialValue);

  const [registerMutations] = useMutation(registerMutation);

  const handleFieldChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const response = await registerMutations({
      variables: values,
    });
    console.log(response);
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Register</div>
      <form onSubmit={onSubmitForm} style={styles.formContainer}>
        <TextField
          name="username"
          value={values.username}
          onChange={handleFieldChange}
          label="Username"
          variant="standard"
          style={styles.textField}
        />
        <TextField
          name="email"
          value={values.email}
          onChange={handleFieldChange}
          label="Email"
          variant="standard"
          style={styles.textField}
        />
        <TextField
          name="password"
          value={values.password}
          onChange={handleFieldChange}
          label="Password"
          variant="standard"
          style={styles.textField}
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
