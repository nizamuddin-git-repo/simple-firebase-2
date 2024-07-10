import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import "./App.css";
import app from "./firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((rusult) => {
        const logginUser = rusult.user;
        console.log(logginUser);
        setUser(logginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSingIn}>Google Sing In</button>
      <button onClick={handleGithubSingIn}>Github sing In </button>
      {user && (
        <div className="card">
          <h4>User: {user.displayName}</h4>
          <h4>Email: {user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
