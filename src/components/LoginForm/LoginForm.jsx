import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserSaga } from "../../actionCreators/actionCreators";

import "./loginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ password: '' , email: '' });
  return (
    <form
      className="item-add-form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(loginUserSaga(user))
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="email"
        required
        onChange={({ target }) => setUser({ ...user, email: target.value })}
        value={user.email}
      />
      <input
        type="password"
        className="form-control"
        placeholder="password"
        required
        onChange={({ target }) => setUser({ ...user, password: target.value })}
        value={user.password}
      />
      <button className="btn btn-outline-secondary">Login</button>
    </form>
  );
};

export default LoginForm;
