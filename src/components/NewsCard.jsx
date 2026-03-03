function NewsCard({ news }) {
  const handleLike = () => {
    alert("Liked!");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link Copied!");
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      marginBottom: "20px",
      borderRadius: "8px"
    }}>
      <img src={news.image} alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h3>{news.title}</h3>
      <p>{news.desc}</p>
      <small><b>{news.category}</b> | {news.date}</small>
      <br /><br />
      <button onClick={handleLike}>Like</button>
      <button onClick={handleShare} style={{ marginLeft: "10px" }}>Share</button>
    </div>
  );
}

export default NewsCard;