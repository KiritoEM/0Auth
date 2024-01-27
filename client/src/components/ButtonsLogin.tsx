import { useRouter } from "next/router";

const ButtonsLogin = (): JSX.Element => {
  const router = useRouter();

  return (
    <section id="buttons-login">
      <div className="google-btn">
        <button
          className="btn btn-1"
          onClick={() =>
            router.push("http://localhost:8000/api/auth/google/callback")
          }
        >
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
