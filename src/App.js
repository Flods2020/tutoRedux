import { useSelector } from "react-redux";
import "./styles/App.css";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils";
import Logo from "./components/Logo";

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  const users = useSelector((state) => state.userReducer);

  return (
    <div className="App">
      <h1>REDUX</h1>
      <div id="logoContainer">
        <Logo />
      </div>
      <div className="posts-container">
        {!isEmpty(posts) &&
          !isEmpty(users) &&
          posts.map((post, index) => (
            <Post post={post} users={users} key={index} />
          ))}
      </div>
    </div>
  );
};

export default App;
