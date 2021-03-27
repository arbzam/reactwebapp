import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <Link to="/services">
        <div className="service-card-con" key={props.id}>
          <div className="img-con">
            <img
              src={process.env.PUBLIC_URL + "images/" + props.image}
              alt="arrow"
              className="img-fluids"
            />
          </div>
          <h2 className="card-head">{props.head}</h2>
          <div className="card-ul-con">
            <ul>
              {props.list.map((val , i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
