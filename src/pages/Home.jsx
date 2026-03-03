import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
import newsData from "../data/newsData";

function Home() {
  return (
    <div style={{ width: "600px", margin: "auto", paddingTop: "30px" }}>
      <h2>News Feed</h2>

      <div style={{ marginBottom: "20px" }}>
        <Link to="/category/Technology">Technology</Link> |{" "}
        <Link to="/category/Sports">Sports</Link> |{" "}
        <Link to="/category/Health">Health</Link>
      </div>

      {newsData.map(news => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
}

export default Home;