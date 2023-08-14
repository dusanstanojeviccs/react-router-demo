export default function Login() {
  let login = () => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({
        email: "dusan3@dusan.com",
        password: "dusan"
      }),
      credentials: "include"
    })
  }
  return (
    <div onClick={login}>Login</div>
  );
}