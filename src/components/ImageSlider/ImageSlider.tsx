import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
type ImageData = {
  author: string;
  download_url: string;
  url: string;
  id: string;
};
const ImageSlider = () => {
  const [jsonData, setJsonData] = useState<ImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<string>("0");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=10"
        );
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const fetchNextImg = (id: string) => {
    const nextId = (Number(id) + 1).toString();
    setCurrentIndex(nextId);
    //setSingleData(jsonData.filter((item) => item.id === nextId));
  };
  const fetchPreviousImg = (id: string) => {
    const previousId = (Number(id) - 1).toString();
    setCurrentIndex(previousId);
  };
  if (jsonData.length === 0) {
    return <div>Loading...</div>;
  }
  const currentImage = jsonData.filter((item) => item.id === currentIndex)[0];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        fontSize: "30px",
      }}
    >
      Image Slider
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            {Number(currentIndex) !== 0 && (
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  zIndex: 1,
                  color: "white",
                }}
                onClick={() => fetchPreviousImg(currentImage.id)}
              />
            )}
            <img
              style={{ width: "500px", height: "500px" }}
              src={currentImage.download_url}
              alt={currentImage.author}
            />
            {Number(currentIndex) !== jsonData.length - 1 && (
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  zIndex: 1,
                  color: "white",
                }}
                onClick={() => fetchNextImg(currentImage.id)}
              />
            )}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "5px",
              }}
            >
              {jsonData.map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor:
                      idx === Number(currentIndex) ? "white" : "gray",
                    border: "1px solid black",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
