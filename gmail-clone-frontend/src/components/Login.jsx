import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginCredentials = {
      email: email,
      password: password,
    };

    const res = await axios.post(
      "http://localhost:4010/login",
      loginCredentials
    );

    if (res.status === 500) {
      console.log("Error logging in!");
    } else {
      const token = res.data.token;
      localStorage.setItem("Authorization", token);
      console.log(token);
      alert("Successfully Signed in!");

      navigate("/home");
      window.location.reload();
    }

    setEmail("");
    setPassword("");

    console.log(
      "Submit was triggered and the received data is " + loginCredentials.email,
      loginCredentials.password
    );
  };

  return (
    <>
      <div className="p-8 flex justify-center">
        <div className="flex flex-col bg-slate-100 space-y-3 p-8 w-96 items-center">
          <div className="space-x-4 flex items-center flex-col">
            <label htmlFor="email" className="text-2xl">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              name="email"
              onChange={handleEmailChange}
              className="w-72 h-12 p-4 rounded-md placeholder:text-center"
            ></input>
          </div>

          <div className="space-x-4 flex items-center flex-col">
            <label htmlFor="password" className="text-2xl">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter the password"
              value={password}
              name="password"
              onChange={handlePasswordChange}
              className="w-72 h-12 p-4 rounded-md placeholder:text-center"
            ></input>
          </div>

          <button
            onClick={handleLogin}
            className="rounded bg-gray-400 p-3 w-24"
          >
            Login
          </button>

          <button
            onClick={() => {
              navigate("/sign-up");
            }}
            className="rounded bg-gray-400 p-3 w-72"
          >
            Not an employee? Become One!
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
