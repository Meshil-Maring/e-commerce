import { use, useState } from "react";
import { useParams, Link, data } from "react-router-dom";

import Back from "../assets/icons/Back";
import MailIcon from "../assets/icons/mail";
import KeyIcon from "../assets/icons/key";
import Person from "../assets/icons/person";
import EyeCloseIcon from "../assets/icons/EyeClose";
import EyeOpenIcon from "../assets/icons/EyeOpen";
import Google from "../assets/images/logos/google.png";
import Facebook from "../assets/images/logos/facebook.png";
import Apple from "../assets/images/logos/apple.png";

const authType = {
  login: "log-in",
  signup: "sign-up",
};

const AuthPage = () => {
  const [hidePassword, setHidePassword] = useState(true);

  //  Auth Erro useState();
  const [authErr, setAuthErr] = useState({
    userName: {
      err: false,
      message: "Please enter your name",
    },

    email: {
      err: false,
      message: "Please enter a valid email address.",
    },

    password: {
      err: false,
      message: "Please create a new password as per the password criteria.",
    },
  });

  const [authData, setAuthData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const changeAuthData = (e) => {
    const { name, value } = e.target;

    setAuthData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handler the submitted form
  const submitHandler = (e) => {
    e.preventDefault();

    const isUserNameEmpty = authData.userName.trim().length === 0;

    setAuthErr((prev) => ({
      ...prev,
      userName: {
        ...prev.userName,
        err: isUserNameEmpty,
      },
    }));
  };

  const type = useParams().type;

  if (type != "log-in" && type != "sign-up") {
    return (
      <div className="text-2xl h-screen flex justify-center items-center flex-col">
        <h2>Page not found!</h2>
        <Link className="text-[#0000FF]" to={"/auth/log-in"}>
          To to log in
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-col justify-between h-[90%] bg-[var(--primary)]">
        <aside className="p-4">
          <Back fill="black" size={28} />
        </aside>

        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-xl font-bold text-[var(--text)]">
            {type == authType.login ? "Log In" : "Sign Up"}
          </h2>
          <p className="text-sm font-meduim">
            {type == authType.login
              ? "Log in by entering your email and password to verify your identity and keep your personal data secure."
              : "Sign up creates an account with your email and password. It lets you access personalized features securely."}
          </p>
        </div>

        <div className="bg-[var(--white)] rounded-t-[32px] mt-4">
          <form className="p-4 flex flex-col gap-3 mt-4">
            {type == authType.signup && (
              <div className="flex flex-col gap-1">
                <aside
                  className={`bg-[var(--white-100)] h-11 rounded-xl flex items-center px-2 gap-4} ${
                    authErr.userName.err ? "border-1 border-red-600" : ""
                  }`}
                >
                  <Person stroke="var(--white-500)" />
                  <input
                    onChange={changeAuthData}
                    name="userName"
                    type="text"
                    placeholder="User name"
                    className="text-sm w-full h-full focus:outline-none text-[var(text)]"
                  />
                </aside>

                <p className="text-[10px] text-red-600">
                  {authErr.userName.err && authErr.userName.message}
                </p>
              </div>
            )}

            <aside className="bg-[var(--white-100)] h-11 rounded-xl flex items-center px-2 gap-4">
              <MailIcon stroke="var(--white-500)" />
              <input
                type="email"
                placeholder="Email"
                className="text-sm w-full h-full focus:outline-none text-[var(text)]"
              />
            </aside>

            <aside className="bg-[var(--white-100)] h-11 rounded-xl flex items-center px-2 gap-4">
              <KeyIcon stroke="var(--white-500)" size={30} />
              <input
                type={hidePassword ? "password" : "text"}
                placeholder="Password"
                className="text-sm w-full h-full focus:outline-none text-[var(text)]"
              />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setHidePassword(!hidePassword);
                }}
              >
                {hidePassword ? (
                  <EyeCloseIcon fill={"var(--white-400)"} size={18} />
                ) : (
                  <EyeOpenIcon stroke="var(--white-400)" size={18} />
                )}
              </button>
            </aside>

            {type == authType.login && (
              <button className="text-right text-[var(--text)] text-sm font-semibold">
                Forget Password?
              </button>
            )}

            {/* Submit the form */}
            <button
              onClick={submitHandler}
              type="submit"
              className="bg-[var(--text)] text-white p-3 rounded-xl text-sm mt-4"
            >
              {type == authType.login ? "Log in" : "Sign up"}
            </button>
          </form>

          <div className="mt-4">
            <div className="flex items-center p-2">
              <div className="h-[2px] w-full bg-[var(--white-200)]"></div>
              <p className="w-fit mx-2 text-sm text-center text-[var(--white-400)]">
                or
              </p>
              <div className="h-[2px] w-full bg-[var(--white-200)]"></div>
            </div>

            <div className="flex flex-col gap-2 p-4 justify-center items-center">
              <button className="flex items-center justify-center gap-2 border-[2px] border-[var(--white-200)] rounded-xl h-11 w-full p-2">
                <img src={Google} alt="Google" className="w-6 h-6" />
                <p className="w-full text-sm">
                  {type == authType.login ? "Log in" : "Sign up"} with Google
                </p>
              </button>

              <button className="flex items-center justify-center gap-2 border-[2px] border-[var(--white-200)] rounded-xl h-11 w-full p-2">
                <img src={Facebook} alt="Google" className="w-6 h-6" />
                <p className="w-full text-sm text-[var(--text)]">
                  {type == authType.login ? "Log in" : "Sign up"} with Facebook
                </p>
              </button>

              <button className="flex items-center justify-center gap-2 border-[2px] border-[var(--white-200)] rounded-xl h-11 w-full p-2">
                <img src={Apple} alt="Google" className="w-6 h-6" />
                <p className="w-full text-sm">
                  {type == authType.login ? "Log in" : "Sign up"} with Apple
                </p>
              </button>

              <p className="text-[var(--white-400)] mt-4 text-sm">
                {type == authType.login ? "Don't" : "Do"} have an accout?
                <Link
                  to={type == authType.login ? "/auth/sign-up" : "/auth/log-in"}
                  className="ml-2 text-[var(--text)] font-bold"
                >
                  {type == authType.login ? "Sign up" : "Log in"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;
