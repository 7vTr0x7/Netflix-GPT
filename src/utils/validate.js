export const checkValidData = (name, email, password) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  if (!isValidEmail) return "Invalid Email";
  if (!isValidPassword) return "Invalid Password";
  if (!isValidName) return "Invalid Name";

  return null;
};
