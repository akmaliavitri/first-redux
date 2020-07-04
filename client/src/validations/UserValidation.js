const UserValidation = (values) => {
  const errors = {};

  if (!values.username || values.username === "") {
    errors.username = "Username is required";
  }

  if (!values.email || values.email === "") {
    errors.email = "Email is required";
  }

  if (!values.password || values.password === "") {
    errors.password = "Password is required";
  }

  return errors
};

export default UserValidation;
