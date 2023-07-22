import { kaushan } from "@/app/fonts";
import React from "react";

interface propsTypes {
  title: string;
  position: string;
}

const SectionTitle = ({ title, position }: propsTypes) => {
  return (
    <div className={`section-title ${position} mb-20`}>
      <h2 className={``}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
