import "../styles/Post.css";

const Post = ({ post, users }) => {
  const user = users[Math.floor(Math.random() * users.length)];

  // console.log(post.auteur);

  return (
    <>
      <div className="card">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <h5>
          {"auteur(e) : " + (post.auteur ? post.auteur.pseudo : user.pseudo)}{" "}
          <br /> {post.auteur ? post.auteur.followers : user.followers}
          {user.followers > 1 ? " followers" : " follower"}
        </h5>
        <span>
          {post.likes}
          {post.likes > 1 ? " likes" : " like"}
        </span>
      </div>
    </>
  );
};

export default Post;
