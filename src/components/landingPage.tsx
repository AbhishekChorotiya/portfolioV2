import React from "react";

const landingPage = () => {
  return (
    <main className="flex h-screen w-screen bg-white justify-center overflow-hidden">
      <div className="w-full max-w-[450px] bg-green-300 flex min-h-full relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-300">
          <div className="absolute bottom-0 h-4/5 w-full bg-gradient-to-t from-green-300" />
        </div>
        <BoundryFade width={"20%"} />
      </div>
      <div className="w-full min-h-full bg-blue-300 relative">
        <BoundryFade width={"10%"} />
      </div>
    </main>
  );
};

export default landingPage;

const BoundryFade = ({ width = "5rem" }: { width?: number | string }) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 min-h-full bg-gradient-to-r from-red-300 to-transparent"
        style={{ minWidth: width }}
      />
      <div
        className="absolute top-0 right-0 min-h-full bg-gradient-to-l from-red-300 to-transparent"
        style={{ minWidth: width }}
      />
    </>
  );
};
