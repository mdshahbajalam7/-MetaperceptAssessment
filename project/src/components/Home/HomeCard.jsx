import React from "react";
import "./home.css";

function HomeCard({ ImageUrl, ID, Name, ShortDesc }) {
  return (
    <div className="homeCard">
        <img className="img" src="https://images.unsplash.com/photo-1673245886359-c7c3f7d2e752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="name" />
      <h2 className="h2tag">{Name}</h2>
      <p className="ptag2">{ShortDesc}</p>
      <button className="btn3">View</button>
    </div>
  );
}

export default HomeCard;
