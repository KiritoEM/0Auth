import ButtonsLogin from "@/components/ButtonsLogin";
import Header from "@/components/Header";
import Head from "next/head";
import { Fragment } from "react";

const login = (): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>0Auth</title>
      </Head>
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
    </Fragment>
  );
};

export default login;
