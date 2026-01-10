export const checkValidData = (email, password, firstName) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isFullNamevalid =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      firstName
    );

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Passsword is not  valid";
  if (!isFullNamevalid) return "Firstname is not  valid";

  return null;
  
};
