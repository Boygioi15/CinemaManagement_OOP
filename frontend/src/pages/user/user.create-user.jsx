import React, { useState } from "react";
import "./user.create-user.style.css";
import axios from "axios";

function CreateUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === "delete") {
      try {
        const response = await axios.delete(
          "http://localhost:5000/api/user/delete-user",
          { name, email, age },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert("Delete user successfully." + email);
      } catch (error) {
        console.log(error);
        alert(
          "Failed to delete user. Error:" +
            JSON.stringify(error.response.data.msg)
        );
      }
    } else if (e.nativeEvent.submitter.name === "create") {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/create-user",
          {
            name,
            email,
            age,
          }
        );

        alert(
          "Create user successfully. User:" + JSON.stringify(response.data.msg)
        );
      } catch (error) {
        console.log("test github");
        alert(
          "Failed to create user. Error:" +
            JSON.stringify(error.response.data.msg)
        );
      }
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
        <button type="submit" name="create">
          Create user
        </button>
        <button type="submit" name="delete">
          Delete user
        </button>
      </form>
    </div>
  );
}

export default CreateUserPage;
