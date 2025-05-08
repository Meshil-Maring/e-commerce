import Back from "../../../assets/icons/Back";

const SignUp = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div>
        <aside>
          <Back />
        </aside>

        <h2> Log In</h2>
        <p>
          Log in by entering your email and password to verify your identity and
          keep your persoal data secure.
        </p>
      </div>

      <div>
        <form>
          <aside>
            <svg></svg>
            <input />
          </aside>

          <aside>
            <svg></svg>
            <input />
          </aside>

          <button type="submit">Log in</button>
        </form>
      </div>

      <div>
        <div>
          <div></div>
          <p>or login with</p>
          <div></div>
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
    </section>
  );
};

export default SignUp;
