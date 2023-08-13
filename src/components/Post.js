import "../styles/Post.css";

const Post = ({ post, users }) => {
  const user = users[Math.floor(Math.random() * users.length)];

  return (
    <>
      <div className="card">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <h5>
          {/* {users[Math.floor(Math.random() * users.length)].pseudo } */}
          {"auteur(e) : " + user.pseudo} <br /> {user.followers}
          {user.followers > 1 ? " followers" : " follower"}
        </h5>
        {/* <h6>{user.followers} followers</h6> */}
        <span>
          {post.likes}
          {post.likes > 1 ? " likes" : " like"}
        </span>
      </div>
    </>
  );
};

export default Post;
