import "../styles/TheGrinch.css";
import theGrinchPop from "../images/theGrinchPop.jpg";
import React, { useState } from "react";

function TheGrinch() {
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
      "../public/assets/The.Grinch.2018.720p.BluRay.DD+5.1.x264-NyHD.torrent";
    link.download = "the_grinch.torrent";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="moviebody">
      <div className="herotitle">
        <h1 className="movie-title">The Grinch movie</h1>
      </div>
      <p className="About-grinch">
        The Grinch este o poveste clasică de Crăciun inspirată din cartea pentru
        copii "How the Grinch Stole Christmas!" scrisă de Dr. Seuss. De-a lungul
        anilor, povestea a fost adaptată în mai multe formate: animații, filme
        și seriale. Grinch este o creatură cinică și morocănoasă care trăiește
        izolat pe un munte deasupra satului Whoville. Urăște Crăciunul și
        planifică să-l fure, furând cadourile și decorațiunile locuitorilor.
        Însă, după ce întâlnește o fetiță pe nume Cindy Lou Who și vede
        adevăratul spirit al sărbătorii, Grinch își schimbă inima și
        îmbrățișează Crăciunul.
      </p>
      <div className="herophoto">
        <img
          src={theGrinchPop}
          alt="TheGrinchPop"
          className="TheGrinchPop"
          onClick={handleDownloadTorrent}
          style={{ cursor: "pointer" }}
        />
      </div>
      <p className="count-display">{count}</p>
    </div>
  );
}

export default TheGrinch;
