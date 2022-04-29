import React from "react";
import { HiChevronRight } from "react-icons/hi";

const BreadCrumb = (props) => {
  return (
    <div className="breadcrumb-content">
      <a href="#"> Anasayfa </a>
      <HiChevronRight className="breadcrumb-icon" />
      <a href="#">Erkek</a>
      <HiChevronRight className="breadcrumb-icon" />
      <a href="#"> Giyim </a>
      <HiChevronRight className="breadcrumb-icon" />
      <a href="#">Gömlek</a>
      <HiChevronRight className="breadcrumb-icon" />
      <a href="#" className="font-bold font-bold">
        {" "}
        Avva Gömlek
      </a>
    </div>
  );
};

export default BreadCrumb;
