import "../styles/Post.css";

const Post = ({ post, users }) => {
  return (
    <>
      <div className="card">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <h4>
          {users[parseInt(post.id - 1)]
            ? users[parseInt(post.id - 1)].pseudo
            : "Wololo"}
        </h4>
        <span>Likes : {post.likes}</span>
      </div>
    </>
  );
};

export default Post;
