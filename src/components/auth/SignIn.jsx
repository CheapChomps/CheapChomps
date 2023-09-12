import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./SignInStyles.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="signin-container">
      <div>
        <form onSubmit={signIn}>
          <h1>Sign in to CheapChomps</h1>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <br />
          <button type="submit">Sign in</button>
          <br />
          <p>Don't have an account? <Link to="/signup">Sign up</Link> for a free account!</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
