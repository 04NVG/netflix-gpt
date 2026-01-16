import  { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import downloadImg from "../img/download.png";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { logo } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch = useDispatch()

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  

  const handleButtonClick = () => {
    const fullNameValue = fullname.current ? fullname.current.value : "";

    const mes = checkValidData(
      email.current.value,
      password.current.value,
      fullNameValue
    );

    seterrorMessage(mes);
    if (mes) return;
    //
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullNameValue,
            photoURL: downloadImg  
          })
            .then(() => {
             const { uid, email, desplayName, photoURL } = auth.currentUser;
                    dispatch(
                      addUser({
                        uid: uid,
                        email: email,
                        desplayName: desplayName,
                        photoURL: photoURL,
                      })
                    );
            
          
            })
            .catch((error) => {
              // An error occurred
              // ...
              seterrorMessage(errorMessage)
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode, errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
       
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode, errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src={logo}
          alt="phot"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-80 text-white rounded-lg p-8 sm:p-12
                 w-11/12 max-w-md mx-auto my-52 flex flex-col"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          {isSignInForm ? "Sign In Bro" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="bg-red-700 py-3 rounded w-full my-4 hover:bg-red-800 transition"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now..."}
        </p>
      </form>
    </div>
  );
};
export default Login;
