import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4000/auth/login`, {
        username,
        password,
      });
      console.log("succesfully logged in");
      localStorage.setItem("token", response.data.token);
      window.location.href = "/";
    } catch (err) {
      setErrMsg("username or password incorrect");
      console.log(err);
    }
  };
  return (
    <div className="p-[20px]">
      <form
        method="POST"
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-5 max-w-[40vw]"
      >
        <p>username</p>
        <input
          type="text"
          name="username"
          className="bg-slate-400 rounded-[20px]"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          className="bg-slate-400 rounded-[20px]"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p>{errMsg}</p>
        <button type="submit" className="bg-slate-200 rounded-[5px] p-2">
          submit
        </button>
        <br />
        <a href="/register">register</a>
      </form>
    </div>
  );
}

export default Login;
