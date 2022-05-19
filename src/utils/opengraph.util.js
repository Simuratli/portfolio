import React, { useState, useEffect, useRef } from "react";
import { urlFor } from "../client";
let test = "";
const CatMeme = ({ src, name }) => {
  const [image, setImage] = useState(null);
  const canvas = useRef(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [testImage, setTestImage] = useState("");

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://thiscatdoesnotexist.com/";
    catImage.onload = () => setImage(catImage);

    console.log(catImage, "catImage");
  }, []);

  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    var words = text.split(" ");
    var line = "";

    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + " ";
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  };

  var canvase = document.getElementById("canvas");
  var imageee = document.getElementById("image");
  useEffect(() => {
    const width = 1200;
    const height = 630;
    let fontSize = 35;
    let lineHeight = fontSize * 1.3975;
    let textArtistY = 220;
    let textTitleY = textArtistY + 220;

    if (canvase && imageee.src) {
      let newImage = new Image();
      newImage.src = src;
      // newImage.crossOrigin = "anonymous";
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "#bdfbd5";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, 1200, 630);
      ctx.drawImage(newImage, 40, 15, 600, 600);
      // ctx.drawImage(newImage, (400 - 256) / 2, 40);
      ctx.font = "20px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      ctx.fillStyle = "#fff";
      ctx.fillRect(550, 70, 600, 500);
      ctx.font = `normal ${fontSize}pt Spectral`;
      ctx.textAlign = "left";
      ctx.textBaseline = "center";
      ctx.fillStyle = "#000";
      wrapText(ctx, `${name}`, 580, textArtistY, 570, lineHeight);

      const dataURL = canvase.toDataURL();
      console.log(dataURL, "dataurl");
      setTestImage(dataURL);
      test = dataURL;
    }

    // setTestImage(dataURL);
    // test = dataURL;
  }, [src, canvase, imageee, canvas]);

  return (
    <div>
      <div>
        <canvas id="canvas" ref={canvas} width={1200} height={630} />
      </div>

      <img
        crossorigin="anonymous"
        style={{ visibility: "hidden", position: "absolute" }}
        id="image"
        src={src}
        alt=""
      />
    </div>
  );
};

export { test };
export default CatMeme;
