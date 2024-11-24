export function checkUserAuthentication() {
  const token = localStorage.getItem('accessToken');
  return token ? true : false;
};