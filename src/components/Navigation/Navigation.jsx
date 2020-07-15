import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoutSaga } from '../../actionCreators/actionCreators'
import { useDispatch } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(null);
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item" onClick={() => setState(0)}>
        <Link
          to="/login"
          className={state === 0 ? "nav-link active" : "nav-link "}
        >
          Login
        </Link>
      </li>
      <li className="nav-item" onClick={() => setState(1)}>
        <Link
          to="/register"
          className={state === 1 ? "nav-link active" : "nav-link "}
        >
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={() => dispatch(logoutSaga())}
        >
          Logout
        </Link>
        {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </li>
    </ul>
  );
};

export default Navigation;
