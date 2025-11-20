import React from "react";
import { Link } from "react-router-dom"; // ✅ Use React Router for navigation

const ClientBreadcrum = () => {
  return (
    <div
      className="site-breadcrumb"
      style={{ backgroundImage: 'url("/assets/img/breadcrumb/01.jpg")' }}
    >
      <div className="container">
        <h2 className="breadcrumb-title" style={{fontSize:"3rem"}}>Our Client</h2>
        <ul className="breadcrumb-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">Our Client</li>
        </ul>
      </div>
    </div>
  );
};

export default ClientBreadcrum;
