"use client";

import Image from "next/image";
import React from "react";

const MockupImage = ({ src = "/nextjs.svg", alt = "" }) => (
  <div className={`mx-6 relative`}>
    <img alt={alt} src={src} className="object-contain max-h-52 w-fit" />
  </div>
);

export default MockupImage;
