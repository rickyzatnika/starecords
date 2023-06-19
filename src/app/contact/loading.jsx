import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Image
        src="/loader.svg"
        width={100}
        height={100}
        priority={true}
        alt="loading..."
        className="mx-auto flex items-center justify-center"
      />
    </div>
  );
};

export default Loading;
