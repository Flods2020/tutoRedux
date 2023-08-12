import "../styles/Post.css";

const Post = ({ post }) => {
  return (
    <>
      <div className="card">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <h4>{post.author}</h4>
        <span>Likes : {post.likes}</span>
      </div>
    </>
  );
};

export default Post;
