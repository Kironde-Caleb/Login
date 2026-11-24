function RegisterPage2() {
  return (
    <>
      <div className="containerNew2">
        <div className="img2"></div>
        <div className="registerContainer">
          <div className="Create">
            <div className="Create2"> <p className="createAcc">Create</p></div>
            <div className="Create3"> <p className="AccountCre">Account</p></div>
          </div>
          <input type="password" className="password2" placeholder="Password" />
          <input type="password" className="retype" placeholder="Re-type password" />
          <div className="finishButton"><p className="finishText">Finish</p></div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage2;
