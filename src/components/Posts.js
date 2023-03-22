function Posts({posts}) {
  return (
    <div>
      <div className="con">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <h4>{post.title}</h4>
            <img src={post.thumbnailUrl} alt="" height="200px" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
