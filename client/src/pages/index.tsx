import ButtonsLogin from "@/components/ButtonsLogin";
import Header from "@/components/Header";

const login = (): JSX.Element => {
  return (
    <section id="login">
      <div id="login__container">
        <div className="shape-1">
          <img src="/shape-1.png" alt="" />
        </div>
        <Header />
        <ButtonsLogin />
        <div className="shape-2">
          <img src="/shape-2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default login;
