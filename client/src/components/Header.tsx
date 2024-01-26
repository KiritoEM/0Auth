const Header = (): JSX.Element => {
  return (
    <section id="header">
      <div className="title">
        <h1>
          Bienvenue sur <span>0Auth!</span>
        </h1>
      </div>
      <div className="text">
        <p>Connectez vous avec votre compte Google ou compte Facebook</p>
      </div>
    </section>
  );
};

export default Header;
