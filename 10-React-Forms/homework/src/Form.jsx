import React from "react";

export function validate(input) {
  let error = {};
  if (!input.username) {
    error.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = "Username is invalid";
  }

  if (!input.password) {
    error.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    error.password = "Password is invalid";
  }
  return error;
}

export default function Form() {
  // const [username, setUsername] = React.useState("");

  // const [password, setPassword] = React.useState("");

  let [input, setInput] = React.useState({
    username: "",
    password: "",
  });

  let [error, setError] = React.useState({});

  let handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    let objError = validate({ ...input, [e.target.name]: e.target.value });

    setError((prev) => (prev = objError));
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          className={error.username && "danger"}
          type="text"
          name="username"
          onChange={(e) => handleInputChange(e)}
          value={input.username}
        />
        {error.username && <p className="danger">{error.username}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          className={error.password && "danger"}
          type="password"
          name="password"
          onChange={(e) => handleInputChange(e)}
          value={input.password}
        />
        {error.password && <p className="danger">{error.password}</p>}
      </div>
      <input type={"submit"} value={"Ingresar"} />
    </form>
  );
}
