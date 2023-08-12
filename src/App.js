import { useSelector } from "react-redux";
import "./styles/App.css";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils";

const App = () => {
  const posts = useSelector((state) => state.postReducer);

  console.log(posts);

  return (
    <div className="App">
      <h1>REDUX</h1>
      <div className="posts-container">
        {!isEmpty(posts) &&
          posts.map((post, index) => <Post post={post} key={index} />)}
      </div>
    </div>
  );
};

export default App;
