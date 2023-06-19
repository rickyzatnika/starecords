import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white  text-xl">
      <Image
        src="/loader.svg"
        width={100}
        height={100}
        priority={true}
        alt="loading..."
        className="mx-auto"
      />
    </div>
  );
};

export default Loading;
