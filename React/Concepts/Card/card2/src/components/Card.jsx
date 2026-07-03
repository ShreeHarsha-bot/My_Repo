import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <img
        className="img"
        src={props.img}
        alt=""
      />
      <h1>{props.name}</h1>
      <p>{props.role}r</p>
      <div className="stats">
        <div className="stat">
          <p>Projects</p>
          <h1>{props.projects}</h1>
        </div>
        <div className="stat">
          <p>Following</p>
          <h1>{props.following}</h1>
        </div>
        <div className="stat">
          <p>Followers</p>
          <h1>{props.followers}</h1>
        </div>
      </div>
      
        <p className="role">
         {props.desc}
        </p>
      
      <div className="media">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/053/986/348/small/x-twitter-icon-logo-symbol-free-png.png"
          alt=""
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Instagram-Logo-Round-Color.png"
          alt=""
        />
      </div>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
