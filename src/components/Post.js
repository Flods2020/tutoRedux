import { useRef, useState } from "react";
import "../styles/Post.css";
import { useDispatch } from "react-redux";
import { deletePost, editPost, getPosts } from "../actions/post.action";
import { isEmpty } from "./Utils";

const Post = ({ post, users }) => {
  const user = users[Math.floor(Math.random() * users.length)];
  const dispatch = useDispatch();

  const formModify = useRef();

  const [editToggle, setEditToggle] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    post = {
      id: post.id,
      title: formModify.current[0].value,
      auteur: JSON.parse(formModify.current[2].value),
      content: formModify.current[1].value,
      likes: post.likes,
    };

    dispatch(editPost(post));
    setEditToggle(false);
    dispatch(getPosts());
  };

  return (
    <>
      <div className="card">
        {editToggle ? (
          <form
            ref={formModify}
            className="formCard"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input type="text" defaultValue={post.title} required />
            <textarea defaultValue={post.content}></textarea>
            <select className="formModify-athorInput" required>
              {post.auteur ? (
                <option value={JSON.stringify(post.auteur)}>
                  {post.auteur.pseudo}
                </option>
              ) : (
                <option value={JSON.stringify(user)}>{user.pseudo}</option>
              )}
              <option value="">{user.pseudo}</option>
              {!isEmpty(users) &&
                users.map((aut, index) => {
                  return (
                    <option id={aut.id} value={JSON.stringify(aut)} key={index}>
                      {aut.pseudo}
                    </option>
                  );
                })}
            </select>
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

        <div className="btn-container">
          <button
            className="card-icons-container"
            onClick={() => {
              setEditToggle(!editToggle);
            }}
          >
            {editToggle ? "Annuler" : "Modifier"}
          </button>

          <button
            className="card-icons-container"
            onClick={() => {
              dispatch(deletePost(post.id));
            }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
