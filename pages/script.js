let isAuthenticated = false;

function login() {
  isAuthenticated = true;
}

function logout() {
  isAuthenticated = false;
}

function checkLogin() {
  return isAuthenticated;
}

export { login, logout, checkLogin };
