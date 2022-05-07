import { useState } from "react";
import Logo from "./assets/img/logo.png";
import AppStoreLogo from "./assets/img/appstore.png";
import GooglePlayLogo from "./assets/img/googleplay.png";
import Button from "./components/button/button";
import Input from "./components/input/input";
import Divider from "./components/divider/divider";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = { email, password };

    console.log(payload);

    setLoading(true);

    const data = await makeRequest(payload);

    setLoading(false);
    console.log(data);
  }

  async function makeRequest(payload) {
    // Making a POST Request
    if (payload) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      return data;
    } else {
      // Making a DELETE Request
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      return data;
    }
  }

  return (
    <section className="section">
      <main className="layout">
        <form onSubmit={handleSubmit}>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <Input
            type="text"
            value={email}
            onChange={(event) => {
              const value = event.target.value;
              setEmail(value);
            }}
            placeholder="Phone number, username or email address"
          />

          <Input
            type="password"
            value={password}
            onChange={(event) => {
              const value = event.target.value;
              setPassword(value);
            }}
            placeholder="Password"
          />

          <Button filled={email && password} disabled={!email && !password}>
            {loading ? "Loading..." : "Log In"}
          </Button>

          <Divider />

          <p className="facebook-login">Log in with Facebook</p>

          <p className="forgot-password">Forgotten your password?</p>
        </form>

        <div className="no-account">
          <p>
            Don't have an account?
            <a className="link" href="#">
              Sign up
            </a>
          </p>
        </div>

        <footer className="footer">
          <p>Get the app.</p>

          <div className="store">
            <img src={AppStoreLogo} alt="App Store" />
            <img src={GooglePlayLogo} alt="Google Play" />
          </div>
        </footer>
      </main>
    </section>
  );
}

export default App;
