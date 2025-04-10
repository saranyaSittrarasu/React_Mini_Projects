import { useState, useEffect } from "react";
type ImageData = {
  author: string;
  download_url: string;
  url: string;
  id: string;
};
const Pagination = () => {
  const [jsonData, setJsonData] = useState<ImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [pages, setPages] = useState<number[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=100"
      );
      const data = await response.json();
      setJsonData(data);
      // const pageCount = Math.ceil(data.length / 10);
      // setPages(Array.from({ length: pageCount }, (_, index) => index));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <h1>Pagination</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          width: "50%",
        }}
      >
        {jsonData.slice(currentIndex, currentIndex + 10).map((item, index) => (
          <div key={index}>
            <img src={item.download_url} alt="" />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1px",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => setCurrentIndex(currentIndex - 10)}
          disabled={currentIndex === 0}
          style={{
            marginRight: "10px",
            width: "100px",
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            backgroundColor: currentIndex === 0 ? "gray" : "lightblue",
          }}
        >
          prev
        </button>
        {[...Array(Math.ceil(jsonData.length / 10))].map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index * 10);
              }}
              style={{
                marginRight: "10px",
                width: "25px",
                backgroundColor:
                  currentIndex === index * 10 ? "blue" : "lightblue",
                cursor: "pointer",
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => setCurrentIndex(currentIndex + 10)}
          disabled={currentIndex === jsonData.length - 10}
          style={{
            marginRight: "10px",
            width: "100px",
            backgroundColor:
              currentIndex === jsonData.length - 10 ? "gray" : "lightblue",
            cursor:
              currentIndex === jsonData.length - 10 ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
