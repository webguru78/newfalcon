import React from "react";
import { Link } from "react-router-dom"; // ✅ Use React Router for navigation

const RecruitmentBreadcrum = () => {
  return (
    <div
      className="site-breadcrumb"
      style={{ backgroundImage: 'url("/assets/img/z1.jpg")' }}
    >
      <div className="container">
        <h2 className="breadcrumb-title" style={{fontSize:"3rem"}}>General Trading & Recruitment
 </h2>
        <ul className="breadcrumb-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">General Trading & Recruitment
</li>
        </ul>
      </div>
    </div>
  );
};

export default RecruitmentBreadcrum;
