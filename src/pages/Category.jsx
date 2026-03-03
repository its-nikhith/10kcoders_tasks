import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import newsData from "../data/newsData";

function Category() {
  const { name } = useParams();

  const filteredNews = newsData.filter(
    news => news.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div style={{ width: "600px", margin: "auto", paddingTop: "30px" }}>
      <h2>{name} News</h2>

      {filteredNews.length > 0 ? (
        filteredNews.map(news => (
          <NewsCard key={news.id} news={news} />
        ))
      ) : (
        <p>No news found.</p>
      )}
    </div>
  );
}

export default Category;