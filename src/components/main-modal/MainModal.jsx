import React from "react";
import "./main-modal.scss";
const MainModal = ({ myClose, active }) => {
  return (
    <>
      <div
        onClick={myClose}
        className={`my-modal ${active && "active-modal"}`}>
        </div>
      <div className={`modal-inner ${active && "active-modal"}`}>
        <p>Lorem ipsum dolor sit.</p>
        <iframe
          width="100%"
          height="315"
          src={`${active ? "https://www.youtube.com/embed/6O8yVeM_V-I" : ""}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button onClick={myClose}>Close</button>
      </div>
    </>
  );
};

export default MainModal;
