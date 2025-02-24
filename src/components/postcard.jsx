import LikeButton from "./likebutton";

function PostCard({ username, profilePic, content }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw0-xqPJ3t7fWvEkZKMsGx0I&ust=1740463981298000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCTtN3T24sDFQAAAAAdAAAAABAE" alt="Profile" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
      <h3>DIYA</h3>
      <p>create memes, have fun</p>
      <LikeButton />
    </div>
  );
}

export default PostCard;
