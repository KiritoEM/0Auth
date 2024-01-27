import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

const index = (): JSX.Element => {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>0Auth - réussite</title>
      </Head>
      <section id="accueil">
        <div className="title">
          <h1>
            Authentification 0Auth <span>réussie ! </span>
          </h1>
        </div>

        <div className="button" onClick={() => router.push("/")}>
          <button className="btn">Revenir au login</button>
        </div>
      </section>
    </Fragment>
  );
};

export default index;
