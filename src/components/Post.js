import { useRef, useState } from "react";
import "../styles/Post.css";
import { useDispatch } from "react-redux";
import { editPost } from "../actions/post.action";

const Post = ({ post, users }) => {
  const user = users[Math.floor(Math.random() * users.length)];
  const dispatch = useDispatch();

  const formModify = useRef();

  const [editToggle, setEditToggle] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formModify);
    (await post.auteur)
      ? (post = {
          id: post.id,
          title: formModify.current[0].value,
          auteur: post.auteur,
          content: formModify.current[1].value,
          likes: post.likes,
        })
      : (post = {
          id: post.id,
          title: formModify.current[0].value,
          content: formModify.current[1].value,
          likes: post.likes,
        });

    dispatch(editPost(post));
    setEditToggle(false);
    // (post.title = form.target[0].value), (post.content = form.target[1].value);
  };

  return (
    <>
      <div className="card">
        <button
          className="card-icons-container"
          onClick={() => {
            setEditToggle(!editToggle);
            console.log(editToggle);
          }}
        >
          Modifier
        </button>

        {editToggle ? (
          <form ref={formModify} onSubmit={(e) => handleSubmit(e)}>
            <input type="text" defaultValue={post.title} />
            <textarea defaultValue={post.content}></textarea>
            <input type="submit" value="Modifier" />
          </form>
        ) : (
          <>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <h5>
              {"auteur(e) : " +
                (post.auteur ? post.auteur.pseudo : user.pseudo)}{" "}
              <br />{" "}
              {post.auteur
                ? post.auteur.followers +
                  `${post.auteur.followers > 1 ? " followers" : " follower"}`
                : user.followers +
                  `${user.followers > 1 ? " followers" : " followers"}`}
            </h5>
            <span>
              {post.likes}
              {post.likes > 1 ? " likes" : " like"}
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default Post;
