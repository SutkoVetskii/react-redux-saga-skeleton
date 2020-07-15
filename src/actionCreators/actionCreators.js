import actionTypes from "./actionTypes";


export function registerUserSaga(user) {
  return { type:  actionTypes.registerUserSaga, user };
}

export function loginUser(user) {
  return { type:  actionTypes.loginUser, user };
}

export function loginUserSaga(user) {
  return { type:  actionTypes.loginUserSaga, user };
}

export function logoutSaga() {
  return { type:  actionTypes.logoutSaga };
}

export function logout() {
  return { type:  actionTypes.logout };
}