import "../styles/PolarExpress.css";
import React, { useState } from "react";
import PolarExpressPop from "../images/PolarExpressPop.jpg";

function PolarExpress() {
  const [count, setCount] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  function handleShowVideo() {
    setShowVideo(true);
    setCount(count + 1);
  }

  function handleDownloadTorrent() {
    setCount(count + 1);
    const link = document.createElement("a");
    link.href =
      "../public/assets/The.Polar.Express.2004.720p.BluRay.DD5.1.x264-playHD.torrent";
    link.download = "polar_express.torrent";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="moviebody">
      <div className="herotitle">
        <h1 className="movie-title">The Polar Express Movie</h1>
      </div>
      <p className="About-PolarExpress">
        "The Polar Express" este un film de animație care spune povestea unui
        băiat care se îndoiește de existența lui Moș Crăciun. În Ajunul
        Crăciunului, băiatul este trezit din somn de un tren magic, Polar
        Express, care îl duce în Laponia, la Polul Nord. Aici, el întâlnește
        alți copii și descoperă magia Crăciunului, învățând despre importanța
        credinței. Filmul este plin de aventuri, prietenii și lecții despre
        curaj, credință și tradițiile Crăciunului.
      </p>
      <div className="herophoto">
        <img
          src={PolarExpressPop}
          alt="PolarExpressPop"
          className="PolarExpressPop"
          onClick={handleDownloadTorrent}
          style={{ cursor: "pointer" }}
        />
      </div>
      <p className="count-display">{count}</p>
    </div>
  );
}

export default PolarExpress;
