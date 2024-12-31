import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../config";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handle change was invoked by: ", name);

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(
      "Signup buttton was invoked with the following data: ",
      data.username,
      data.email,
      data.password,
      data.confirmpassword
    );

    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    if (data.password !== data.confirmpassword) {
      console.log(
        "The passwords do not match, kindly check before submitting!"
      );
    } else {
      const res = await axios.post(`${BASE_URL}/signup`, newUser);
      console.log(res);
      if (res.status === 500) {
        console.log("Error signing up!");
      } else {
        alert(
          "User has successfully signed up, you can proceed to logging in!"
        );
        navigate("/login");
      }
    }
  };

  return (
    <>
      <div className="p-8 flex justify-center">
        <div className="flex flex-col bg-slate-100 space-y-3 p-8 w-96 items-center">
          <div className="space-x-4 flex items-center flex-col">
            <label htmlFor="username" className="text-2xl">
              Name:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              value={data.username}
              name="username"
              onChange={handleChange}
              className="w-72 h-12 rounded-md placeholder:text-center p-4"
            ></input>
          </div>

          <div className="space-x-4 flex items-center flex-col">
            <label htmlFor="email" className="text-2xl">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={data.email}
              name="email"
              onChange={handleChange}
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
              value={data.password}
              name="password"
              onChange={handleChange}
              className="w-72 h-12 p-4 rounded-md placeholder:text-center"
            ></input>
          </div>

          <div className="space-x-4 flex items-center flex-col">
            <label htmlFor="confirmpassword" className="text-2xl">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm your password"
              value={data.confirmpassword}
              name="confirmpassword"
              onChange={handleChange}
              className="w-72 h-12 p-4 rounded-md placeholder:text-center"
            ></input>
          </div>

          <button
            onClick={handleSignUp}
            className="rounded bg-gray-400 p-3 w-24"
          >
            Sign Up
          </button>

          <button
            onClick={() => {
              navigate("/login");
            }}
            className="rounded bg-gray-400 p-3 w-72"
          >
            Already an user? Login instead!
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
