import { useSelector } from "react-redux";
import "./styles/App.css";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils";
import Logo from "./components/Logo";
import Form from "./components/Form";

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  const users = useSelector((state) => state.userReducer);

  return (
    <>
      <header id="header">
        <Logo />
        <h1>REDUX</h1>
        <Logo />
        <h1>REDUX</h1>
        <Logo />
      </header>
      <div className="App">
        <div className="form-container">
          <Form />
        </div>
        <div className="posts-container">
          {!isEmpty(posts) &&
            !isEmpty(users) &&
            posts.map((post, index) => (
              <Post post={post} users={users} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
