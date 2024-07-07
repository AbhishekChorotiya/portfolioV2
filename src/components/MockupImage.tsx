"use client";

import Image from "next/image";
import React from "react";

const MockupImage = ({ src = "/nextjs.svg", alt = "" }) => (
  <div
    onClick={() => alert(`hello ${alt}`)}
    className="min-w-[300px] cursor-pointer min-h-[200px] mx-2 rounded-full relative"
  >
    <Image alt={alt} src={src} layout="fill" objectFit="contain" />
  </div>
);

export default MockupImage;
