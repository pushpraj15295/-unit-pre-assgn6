import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Login({ token, setToken }) {
  const [formstate, setFormstate] = useState({
    email: "",
    password: ""
  });

  const { handleLogin } = useContext(AppContext);

  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormstate({
      ...formstate,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formstate)
    })
      .then((res) => res.json())
      .then((res) => {
        nav("/dashboard");
        alert(`email:${formstate.email}`);
        console.log(res);
        handleLogin(res.token);
        setToken([...token, res.token]);
      })
      .catch((err) => {});
  };

  //////////////////////////////////////////////

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              onChange={handleChange}
              name="email"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
