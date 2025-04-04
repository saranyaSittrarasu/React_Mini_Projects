import { useEffect, useState } from "react";
type productdata = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};
const LoadMoreButton = () => {
  const [data, setData] = useState<productdata[]>([]);
  const [nextData, setNextData] = useState<number>(0);
  const LoadData = async () => {
    try {
      const result = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${nextData}`
      );
      const json = await result.json();
      setData([...data, ...json.products]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LoadData();
  }, [nextData]);
  const loadMoreData = async () => {
    setNextData(nextData + 20);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          position: "sticky",
          top: "0",
        }}
      >
        Load More Button
      </h1>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          width: "100%",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {data &&
            data.map((item, i) => {
              return (
                <div
                  key={i}
                  style={{
                    textAlign: "center",
                    border: "1px solid black",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                  <h2>{item.title}</h2>
                </div>
              );
            })}
        </div>
        <button
          style={{
            padding: "10px",
            cursor: data.length !== 100 ? "pointer" : "not-allowed",
            backgroundColor: data.length !== 100 ? "lightblue" : "gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            width: "100%",
          }}
          disabled={data.length === 100}
          onClick={() => loadMoreData()}
        >
          Load More Data
        </button>
        {data.length === 100 && (
          <div
            style={{
              color: "red",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Maximum limit reached (100)
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadMoreButton;
