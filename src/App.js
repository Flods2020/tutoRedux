import { useSelector } from "react-redux";
import "./styles/App.css";

const App = () => {
  const posts = useSelector((state) => state.postReducer);

  console.log(posts);

  return <div className="App">redux</div>;
};

export default App;
