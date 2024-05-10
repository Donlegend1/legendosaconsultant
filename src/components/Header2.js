import React from 'react'

export default function Header2({title}) {
  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="bg-breadcrumb-single" />
      <div
        className="container text-center py-5"
        style={{ "max-width": "900px" }}>
        <h4
          className="text-white display-4 mb-4 wow fadeInDown"
          data-wow-delay="0.1s">
          About Us
        </h4>
        <ol
          className="breadcrumb justify-content-center mb-0 wow fadeInDown"
          data-wow-delay="0.3s">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-primary">{title}</li>
        </ol>
      </div>
    </div>
  );
}
