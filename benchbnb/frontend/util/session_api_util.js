// export const signup = ({username, password}) => $.ajax({
//   method: 'POST',
//   url: '/api/users',
//   data: {user: {username: username, password: password}}
// });


 export const signup = (user) => $.ajax({
  method: 'POST',
  url: '/api/users',
  data: {user}
});
