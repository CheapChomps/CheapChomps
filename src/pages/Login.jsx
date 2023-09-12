import { Auth } from "../components/auth.jsx";
import SignIn from "../components/auth/SignIn.jsx";
import SignUp from "../components/auth/SignUp.jsx";
import AuthDetails from "../components/auth/AuthDetails.jsx";

const Login = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
};

export default Login;
