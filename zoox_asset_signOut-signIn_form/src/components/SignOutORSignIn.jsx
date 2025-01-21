import "../assets/css/SignOutORSignIn.css";
import zooxImage from "../assets/images/0x0.jpeg";
import zooxHeader from "../assets/images/zoox-logo-transparent.png";
function SignOutORSignIn() {
  return (
    <div className="SignOutORSignIn_Div">
      <img className="zooxHeader1" src={zooxHeader} alt="" />
      <div className="signOutOrSignInLinks">
        <a className="signOutLink" href="/sign-out">
          Sign Out
        </a>
        <p className="orHolder">or</p>
        <a className="signInLink" href="/sign-in">
          Sign In
        </a>
      </div>
      <img className="zooxBackground" src={zooxImage} alt="" />
    </div>
  );
}

export default SignOutORSignIn;
