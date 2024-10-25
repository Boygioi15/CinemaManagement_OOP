import React, { useState } from "react";
import "./user.create-user.style.css"
import axios from "axios";

function CreateUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/create-user", {
        name,
        email,
        age,
      });
      
      alert("Create user successfully. User:" + JSON.stringify(response.data.msg))
    } catch (error) {
      console.log("test github")
      alert("Failed to create user. Error:" + JSON.stringify(error.response.data.msg));
    }
  };

  return (
    <div className="createUserPageRoot">
      <h1>Create a new user!</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={age}
          type="text"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Create user</button>
      </form>
    </div>
  );
}

export default CreateUserPage;
