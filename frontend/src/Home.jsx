function Home() {
  return (
    <>
      <header className="header">
        <div className="WeSellHome">
          <div className="WeSell2">
            {" "}
            <p className="we">We</p>
          </div>
          <div className="WeSell3">
            {" "}
            <p className="sell">Sell</p>
          </div>
        </div>
        <input
          type="text"
          className="search"
          placeholder="Search business . . ."
        />
        <div className="menu"></div>
        <div className="icons">
          <div className="chat"></div>
          <div className="bell"></div>
          <div className="headersell">
            <p className="headfont"> SELL</p>
          </div>
          <div className="heart"></div>
          <div className="add"></div>
        </div>
        <div className="avata2"></div>
      </header>
      <footer className="footer">
        <p className="footersell"> We Sell</p> <br /> <br />
        <p className="footerabout"> About</p>
        <p className="footerhelp"> Help</p>
        <p className="footercontact"> Contact us</p>
        <p className="footerworks"> how it works</p>
      </footer>
    </>
  );
}

export default Home;
