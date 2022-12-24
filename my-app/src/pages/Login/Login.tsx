import * as React from "react";
import "./Login.css";

interface LoginState {
  password: string;
  username: string;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}

export default function Login() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div className="App">
      <div className="login-container">
        <form className="form" onSubmit={onSubmit} action="/ingridients">
          <p> Please Login!</p>
          <input
            type="text"
            placeholder="username"
            required
            // value={username}
            onChange={(e) => {}}
          />
          <input
            type="password"
            placeholder="password"
            // autoComplete="new-password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          ></input>
          <a href="/ingridients">
            <button className="submit">Login In</button>
          </a>
        </form>
      </div>
    </div>
  );
}
