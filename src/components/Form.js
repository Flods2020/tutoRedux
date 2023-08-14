import { useDispatch, useSelector } from "react-redux";
import "../styles/Form.css";
import { isEmpty } from "./Utils";
import { useRef } from "react";
import { addPosts } from "../actions/post.action";

const Form = () => {
  const users = useSelector((state) => state.userReducer);
  const posts = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  const form = useRef();

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log("form ::: ", form.current[1].keys);
    const newPost = {
      id: parseInt(Math.random() * 100 * (Math.random() * 50)),
      title: form.current[0].value,
      auteur: form.current[1].value,
      content: form.current[2].value,
      likes: 0,
    };
    console.log(newPost);
    dispatch(addPosts(newPost));
    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={submitForm}>
      <label>
        Titre {" : "}
        <input type="text" className="titleInput" />
      </label>
      <label>
        Auteur {" : "}
        <select className="authorInput" placeholder="Auteur">
          <option value="">Sélectionnez un auteur</option>
          {!isEmpty(users) &&
            users.map((user, index) => {
              return (
                <option value={user} key={index}>
                  {user.pseudo}
                </option>
              );
            })}
        </select>
      </label>
      <textarea className="descrInput" placeholder="Description"></textarea>
      <input type="submit" className="submitButton" value="Ajouter" />
    </form>
  );
};

export default Form;
