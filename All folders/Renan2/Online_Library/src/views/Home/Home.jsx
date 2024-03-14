import Header from "../../components/Header/Header";
import "./index.scss";
import { useState } from "react";
import Login from "../../components/Login";

const Home = () => {
  let [user, setUser] = useState([]);

  return (
    <div className="home">
      <Header />
      <h1>Fire Development Library</h1>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="user">User</label>
            <input
              type="text"
              required
              id="user"
              name="user"
              autoFocus
              onChange={(event) => {
                setUser({ ...user, name: event.target.value });
              }}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              id="password"
              name="password"
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
            />
            <Login user={user} classes="secundary"></Login>
            <Login user={user} classes="primary rounded"></Login>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
