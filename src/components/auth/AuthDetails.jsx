import { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Customlink } from "../Navbar";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Logged In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign out</button>
        </>
      ) : (
        <Customlink to="/signin">Sign In</Customlink>
      )}
    </div>
  );
};

export default AuthDetails;
