function RegisterPage2() {
  return (
    <>
      <div className="containerNew2">
        <div className="img3"></div>
        <div className="registerContainer">
          <div className="Create">
            <div className="Create2"> <p className="createAcc">Create</p></div>
            <div className="Create3"> <p className="AccountCre">Account</p></div>
          </div>
          <div className="avata"></div>
          <div className="camera"></div>
          <div className="circle"></div>
          <input type="text" className="contact" placeholder="Phone number" />
          <input type="password" className="password2" placeholder="Password" />
          <input type="password" className="retype" placeholder="Re-type password" />
          <div className="finishButton"><p className="finishText">Finish</p></div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage2;
