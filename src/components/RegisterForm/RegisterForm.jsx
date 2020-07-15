import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserSaga } from "../../actionCreators/actionCreators";
import { addItemSaga } from "../../actionCreators/actionCreators";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ name : '', password: '' , email: '' });
  return (
    <form
      className="item-add-form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(registerUserSaga(user));
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="name"
        required
        onChange={({ target }) => setUser({ ...user, name: target.value })}
        value={user.name}
      />

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

export default RegisterForm;
