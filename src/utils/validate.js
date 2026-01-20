export const checkValidData = (email, password, fullName) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

   if (fullName && fullName.trim() !== "") {
    if (!/^[a-zA-Zа-яА-ЯёЁ\s]{2,50}$/.test(fullName)) {
      return "Full name is not valid";
    }
  }
  

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Passsword is not  valid";
 

  return null;
  
};
