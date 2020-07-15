import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "../actionCreators/actionTypes";
import {
  loginUser,
  logout,
} from "../actionCreators/actionCreators";





const registerUserFetch = async (user) => {
  return await (
    await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    })
  ).json();
};

function* registerUserOnServer({ user }) {
  try {
    // yield put((isLoading));
    const result = yield call(() => registerUserFetch(user));
    if(result.status === 200){
    yield put(loginUser(result.user));
    }else{
    console.log(result.err);
    }
  } catch (error) {
    // yield put(loadingError(error.message));
  }
}

const loginUserFetch = async (user) => {
  return await (
    await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    })
  ).json();
};

function* loginUserOnServer({ user }) {
  try {
    // yield put((isLoading));
    const result = yield call(() => loginUserFetch(user));
    console.log(result);
    if(result.status === 200){
    yield put(loginUser(result.user));
    }else{
    console.log(result.err);
    }
  } catch (error) {
    // yield put(loadingError(error.message));
  }
}

const logoutFetch = async () => {
  return await (
    await fetch("http://localhost:4000/auth/logout")
  ).json();
};

function* logoutOnServer() {
  try {
    // yield put((isLoading));
    const result = yield call(logoutFetch);
    console.log(result);
    if(result.status === 200){
    yield put(logout());
    }else{
    console.log(result.err);
    }
  } catch (error) {
    console.log(error);
    // yield put(loadingError(error.message));
  }
}

function* saga() {
  yield takeEvery(actionTypes.registerUserSaga, registerUserOnServer);
  yield takeEvery(actionTypes.loginUserSaga, loginUserOnServer);
  yield takeEvery(actionTypes.logoutSaga, logoutOnServer);
}

export default saga;
