import React, { useEffect, useState } from "react";
import newsCss from "./News.module.css";

function News() {
  const [data, setData] = useState(null);

  let ranNum = Math.floor(Math.random() * 10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=23fc952666ac4665ba5639efbb06af9b"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(data?.articles[ranNum]?.title);

  return (
    <>
      <div className={newsCss.main}>
            <img className={newsCss.newsImg} src={data?.articles[ranNum]?.urlToImage} alt="" />
            <h2 className={newsCss.newsHead}>{data?.articles[ranNum]?.title}</h2>
            <p className={newsCss.description}>{data?.articles[ranNum]?.description}</p>
      </div>
    </>
  );
}

export default News;
