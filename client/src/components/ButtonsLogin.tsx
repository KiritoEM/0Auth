import { signIn } from "next-auth/react";

const ButtonsLogin = (): JSX.Element => {
  return (
    <section id="buttons-login">
      <div className="google-btn">
        <button className="btn btn-1" onClick={() => signIn("google")}>
          <img src="/google-icon.png" alt="" /> Se connecter avec Google
        </button>
      </div>
      <div className="facebook-btn">
        <button className="btn btn-2">
          <img src="/facebook-icon.png" alt="" /> Se connecter avec Facebook
        </button>
      </div>
    </section>
  );
};

export default ButtonsLogin;
