import React from "react";

const BoundaryFade = ({
  width = "5rem",
  dark = false,
}: {
  width?: number | string;
  dark?: boolean;
}) => {
  return (
    <>
      <div
        className="absolute hidden lg:flex z-50 top-0 left-0 min-h-full bg-gradient-to-r from-background  to-transparent"
        style={{ minWidth: width }}
      />
      {dark && (
        <div
          className="absolute hidden lg:flex z-50 top-0 left-0 min-h-full bg-gradient-to-r from-background  to-transparent"
          style={{ minWidth: width }}
        />
      )}
      <div
        className="absolute hidden lg:flex z-50 top-0 right-0 min-h-full bg-gradient-to-l from-background to-transparent"
        style={{ minWidth: width }}
      />
      {dark && (
        <div
          className="absolute hidden lg:flex z-50 top-0 right-0 min-h-full bg-gradient-to-l from-background  to-transparent"
          style={{ minWidth: width }}
        />
      )}
    </>
  );
};

export default BoundaryFade;
