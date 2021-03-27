import React from "react";
import "./Package.css";
import Card from "../Card";
import data from "../Data";
import Heading from "../Heading/Heading";
const Package = () => {
  function card(val) {
    return (
      <>
        <div className="col-12 col-md-6 col-lg-4">
          <Card id={val.id} head={val.heading} image={val.image} list={val.list} />
        </div>
      </>
    );
  }
  return (
    <>
      <section className="package">
        <Heading smallHead="startup" boldHead="packages" />
        <div className="container">
          <div className="row">{data.map(card)}</div>
        </div>
      </section>
    </>
  );
};

export default Package;
