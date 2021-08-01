// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [img, setImg] = useState();
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImg(data);
        setIsLoading((prev) => !prev);
      });
  }, []);
  return (
    <div>
      {!isloading ? (
        <p>Loading....</p>
      ) : (
        <img src={img.message} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
