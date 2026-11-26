function LoginNew() {
  return (
    <>
      <div className="containerNew">
        <div className="img"></div>
        <div className="loginContainer">
          <div className="WeSell">
            <div className="WeSell2"> <p className="we">We</p></div>
            <div className="WeSell3"> <p className="sell">Sell</p></div>
          </div>
          <input type="text" className="email" placeholder="E-mail" />
          <input type="password" className="password" placeholder="Password" />
          <a href="" className="forgot">Forgot passsword</a>
          <div type="button" className="button1">
            <p className="loginFont">Log In</p>
          </div>
          <div type="button" className="button2">
            <p className="accountFont">Create account</p>
          </div>
          <div type="button" className="button3">
            <div className="goimage"></div>
            <p className="googleFont">Continue with Google</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginNew;
