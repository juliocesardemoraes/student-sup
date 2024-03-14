import { Link, useNavigate } from "react-router-dom";
import { UserService } from "../api/UserService";

export default function Login({ user, classes = "primary" }) {
  const navigate = useNavigate();

  async function getLogin() {
    const body = {
      user: user.name,
      password: user.password,
    };
    if (user.name && user.password) {
      const { data } = await UserService.getUsers(
        user.name,
        user.pasword,
        body
      );
      const users = data.response;
      const userFound = users.filter(
        (users) => users.name == user.name && users.password == user.password
      );
      if (userFound.length > 0) {
        navigate("/books");
      } else {
        alert("Login ou senha incorretas");
      }
    }
  }

  return (
    <Link>
      <button
        className={classes}
        onClick={() => {
          getLogin();
        }}
      >
        Login
      </button>
    </Link>
  );
}
