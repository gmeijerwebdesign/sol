import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null); // New state for the image file
  const [errMsg, setErrMsg] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      if (file) {
        formData.append("image", file);
      }

      const response = await axios.post(
        "http://localhost:4000/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Successfully registered");

      window.location.href = "/login";
    } catch (err) {
      setErrMsg("Error during registration");
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-[20px]">
      <form
        method="POST"
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-5 max-w-[40vw]"
      >
        <p>Username</p>
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
        <p>Upload Profile Image</p> {/* New input for image upload */}
        <input
          type="file"
          name="image"
          className="bg-slate-400 rounded-[20px]"
          onChange={handleFileChange}
        />
        <p>{errMsg}</p>
        <button type="submit" className="bg-slate-200 rounded-[5px] p-2">
          Submit
        </button>
        <br />
        <a href="/login">Login</a>
      </form>
    </div>
  );
}

export default Register;
