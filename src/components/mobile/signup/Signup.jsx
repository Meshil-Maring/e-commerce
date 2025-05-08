import Back from "../../../assets/icons/Back";
import MailIcon from "../../../assets/icons/mail";
import KeyIcon from "../../../assets/icons/key";
import EyeOpen from "../../../assets/icons/EyeOpen";

const SignUp = () => {
  return (
    <section className="flex flex-col justify-between h-screen bg-[var(--primary)]">
      <aside className="p-4">
        <Back fill="black" size={28} />
      </aside>

      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[var(--text)]"> Log In</h2>
        <p className="text-sm font-semibold">
          Log in by entering your email and password to verify your identity and
          keep your persoal data secure.
        </p>
      </div>

      <div className="bg-[var(--white)] rounded-t-[32px] mt-4">
        <form className="p-4 flex flex-col gap-4 mt-4">
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
              type="email"
              placeholder="Password"
              className="text-sm w-full h-full focus:outline-none text-[var(text)]"
            />
            <EyeOpen stroke="var(--white-500)" />
          </aside>
          <button className="text-[12px] text-right">Forget Password?</button>
          <button
            type="submit"
            className="bg-[var(--text)] text-white p-3 rounded-xl text-sm"
          >
            Log in
          </button>
        </form>

        <div>
          <div className="flex items-center p-2">
            <div className="h-[2px] w-full bg-[var(--white-200)]"></div>
            <p className="w-full text-center text-[var(--white-400)]">
              or log-in with
            </p>
            <div className="h-[2px] w-full bg-[var(--white-200)]"></div>
          </div>

          <div>
            <button>
              <svg></svg>
              <p>Log in with Google</p>
            </button>

            <button>
              <svg></svg>
              <p>Log in with Facebook</p>
            </button>

            <button>
              <svg></svg>
              <p>Log in with Apple</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
