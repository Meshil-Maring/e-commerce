import Back from "../../../assets/icons/Back";
import MailIcon from "../../../assets/icons/mail";
import KeyIcon from "../../../assets/icons/key";
import Person from "../../../assets/icons/person";
import EyeOpen from "../../../assets/icons/EyeOpen";
import Google from "../../../assets/images/logos/google.png";
import Facebook from "../../../assets/images/logos/facebook.png";
import Apple from "../../../assets/images/logos/apple.png";

const SignUp = () => {
  return (
    <section className="flex flex-col justify-between h-screen bg-[var(--primary)]">
      <aside className="p-4">
        <Back fill="black" size={28} />
      </aside>

      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[var(--text)]">Sign up</h2>
        <p className="text-sm font-semibold">
          Sign up creates an account with your email and password. It lets you
          access personalized features securely.
        </p>
      </div>

      <div className="bg-[var(--white)] rounded-t-[32px] mt-4">
        <form className="p-4 flex flex-col gap-4 mt-4">
          <aside className="bg-[var(--white-100)] h-12 rounded-xl flex items-center px-2 gap-4">
            <Person stroke="var(--white-500)" />
            <input
              type="text"
              placeholder="User name"
              className="text-sm w-full h-full focus:outline-none text-[var(text)]"
            />
          </aside>

          <aside className="bg-[var(--white-100)] h-12 rounded-xl flex items-center px-2 gap-4">
            <MailIcon stroke="var(--white-500)" />
            <input
              type="email"
              placeholder="Email"
              className="text-sm w-full h-full focus:outline-none text-[var(text)]"
            />
          </aside>

          <aside className="bg-[var(--white-100)] h-12 rounded-xl flex items-center px-2 gap-4">
            <KeyIcon stroke="var(--white-500)" size={30} />
            <input
              type="password"
              placeholder="Password"
              className="text-sm w-full h-full focus:outline-none text-[var(text)]"
            />
            <EyeOpen stroke="var(--white-500)" />
          </aside>
          <button className="text-[12px] text-right">Forget Password?</button>

          <button
            type="submit"
            className="bg-[var(--text)] text-white p-3 rounded-xl text-sm mt-4"
          >
            Log in
          </button>
        </form>

        <div className="mt-4">
          <div className="flex items-center p-2">
            <div className="h-[2px] w-full bg-[var(--white-200)]"></div>
            <p className="w-full text-center text-[var(--white-400)]">
              or log in with
            </p>
            <div className="h-[2px] w-full bg-[var(--white-200)]"></div>
          </div>

          <div className="flex flex-col gap-2 p-4 justify-center items-center">
            <button className="flex items-center justify-center gap-2 border-[2px] border-[var(--white-200)] rounded-xl h-12 w-full p-2">
              <img src={Google} alt="Google" className="w-6 h-6" />
              <p className="w-full text-sm">Log in with Google</p>
            </button>

            <button className="flex items-center justify-center gap-2 border-[2px] border-[var(--white-200)] rounded-xl h-12 w-full p-2">
              <img src={Facebook} alt="Google" className="w-6 h-6" />
              <p className="w-full text-sm">Log in with Google</p>
            </button>

            <button className="flex items-center justify-center gap-2 border-[2px] border-[var(--white-200)] rounded-xl h-12 w-full p-2">
              <img src={Apple} alt="Google" className="w-6 h-6" />
              <p className="w-full text-sm">Log in with Google</p>
            </button>

            <p className="text-[var(--white-400)] mt-4 text-sm">
              Don't have an accout?
              <button className="ml-2 text-[var(--text)] font-bold">
                {" "}
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
