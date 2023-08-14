import { useDispatch, useSelector } from "react-redux";
import "../styles/Form.css";
import { isEmpty } from "./Utils";
import { useRef } from "react";
import { addPosts, getPosts } from "../actions/post.action";

const Form = () => {
  const users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const form = useRef();

  const submitForm = async (e) => {
    e.preventDefault();

    const newPost = {
      id: parseInt(Math.random() * 100 * (Math.random() * 50)),
      title: form.current[0].value,
      auteur: JSON.parse(form.current[1].value),
      content: form.current[2].value,
      likes: 0,
    };

    // console.log(newPost);
    dispatch(addPosts(newPost));
    dispatch(getPosts());
    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={submitForm}>
      <label>
        Titre {" : "}
        <input type="text" className="titleInput" required />
      </label>
      <label>
        Auteur {" : "}
        <select className="authorInput" required>
          <option value="">Sélectionnez un auteur</option>
          {!isEmpty(users) &&
            users.map((aut, index) => {
              return (
                <option id={aut.id} value={JSON.stringify(aut)} key={index}>
                  {aut.pseudo}
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
