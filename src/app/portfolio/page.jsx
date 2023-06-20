"use client";
import LightGallery from "lightgallery/react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import axios from "axios";
import Link from "next/link";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;
      const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
      const auth = btoa(`${apiKey}:${apiSecret}`);

      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URI}/v1_1/${cloudName}/resources/image?type=upload&prefix=photo/starecords/${activeButton}&max_results=50`,
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );
        setData(response.data.resources);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
        // Setelah permintaan selesai, isLoading diubah menjadi false
      }
    };
    getGallery();
  }, [activeButton]);

  return (
    <section className="w-full h-full overflow-hidden">
      <div className="relative w-full h-[400px] flex items-center justify-center ">
        <Image
          src="/cafe.jpg"
          alt=""
          fill={true}
          priority={true}
          className="object-cover relative object-center grayscale-[100]"
        />
        <div className="absolute z-20 bottom-0 w-full h-full bg-gradient-to-t from-black via-black/30" />
        <div className=" bg-zinc-500/20 backdrop-blur-lg py-2 px-5 w-full text-center z-30 absolute bottom-0 ">
          <h1 className="text-3xl text-zinc-200 w-fit mx-auto font-[Coco] uppercase md:text-5xl relative">
            s.r.e band
            <span className="absolute rounded -top-6 font-bold py-1 px-3 md:-top-4 -right-32 shadow-inner shadow-black/80 bg-[#FDDE13] text-zinc-800 font-sans rotate-90 transform origin-top-left  tracking-widest text-sm">
              gallery
            </span>
          </h1>
        </div>
      </div>
      <div className="buttonContainer px-4 flex gap-5 md:gap-8 relative overflow-scroll z-20 w-screen max-w-[240vw] touch-manipulation py-10 h-full items-start mt-4">
        <button
          onClick={() => setActiveButton("")}
          className={`group hover:border-[#FDDE13] transition-all text-sm  hover:text-[#FDDE13] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${
            activeButton === ""
              ? " border-[#FDDE13] text-[#FDDE13] "
              : " border-zinc-600 text-zinc-500/80 "
          }`}
        >
          All
          <span
            className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-[#FDDE13] w-full h-full absolute -z-20 ${
              activeButton === ""
                ? "bg-[#FDDE13] -bottom-2 -left-2 border-none"
                : ""
            } `}
          ></span>
        </button>
        <button
          onClick={() => setActiveButton("fan")}
          className={`group hover:border-[#FDDE13] transition-all text-sm  hover:text-[#FDDE13] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border  ${
            activeButton === "fan"
              ? "border-[#FDDE13] text-[#FDDE13] "
              : "border-zinc-600 text-zinc-500/80"
          }`}
        >
          FESTIVAL
          <span
            className={`border-l border-b  group-hover:border-none border-zinc-600  -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-[#FDDE13] w-full h-full absolute -z-20 ${
              activeButton === "fan"
                ? "bg-[#FDDE13] -bottom-2 -left-2 border-none"
                : ""
            }`}
          ></span>
        </button>
        <button
          onClick={() => setActiveButton("samsung")}
          className={`group hover:border-[#FDDE13] transition-all text-sm  hover:text-[#FDDE13] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border  ${
            activeButton === "samsung"
              ? "border-[#FDDE13] text-[#FDDE13]"
              : "border-zinc-600 text-zinc-500/80"
          }`}
        >
          SAMSUNG
          <span
            className={`border-l border-b group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-[#FDDE13] w-full h-full absolute -z-20 ${
              activeButton === "samsung"
                ? "bg-[#FDDE13] -bottom-2 -left-2 border-none"
                : ""
            }`}
          ></span>
        </button>
        <button
          onClick={() => setActiveButton("cafe")}
          className={`group hover:border-[#FDDE13] transition-all text-sm hover:text-[#FDDE13] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${
            activeButton === "cafe"
              ? "border-[#FDDE13] text-[#FDDE13]"
              : "border-zinc-600 text-zinc-500/80"
          }`}
        >
          CAFE
          <span
            className={`border-l border-b group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-[#FDDE13] w-full h-full absolute -z-20 ${
              activeButton === "cafe"
                ? "bg-[#FDDE13] -bottom-2 -left-2 border-none"
                : ""
            }`}
          ></span>
        </button>
      </div>
      {isLoading && (
        <div className="w-full h-full  z-50 right-0 text-center mt-10 md:mt-40 text-zinc-200">
          <Image
            src="/loader.svg"
            width={100}
            height={100}
            priority={true}
            alt="loading..."
            className="mx-auto flex items-center justify-center"
          />
        </div>
      )}
      <LightGallery
        speed={800}
        plugins={[lgZoom]}
        elementClassNames="w-full relative z-10 h-full columns-2 md:columns-3 gap-2 md:gap-3 px-3 md:px-12 py-8 md:py-20"
      >
        {activeButton === "" ? (
          <>
            {!isLoading &&
              data.map((g, i) => (
                <Link
                  key={i}
                  href={g.secure_url}
                  passHref
                  prefetch={true}
                  data-sub-html={`<h4>Photo by - Eddie AMP </h4> <p class="date"> ${moment(
                    g.created_at
                  )
                    .startOf("hour")
                    .fromNow()}</p>`}
                >
                  <Image
                    className="w-full md:w-96  h-auto object-cover mb-2 md:mb-3 mx-auto"
                    src={g.secure_url}
                    alt=""
                    placeholder="blur"
                    blurDataURL={g.secure_url}
                    width={1200}
                    height={900}
                    priority={true}
                  />
                </Link>
              ))}
          </>
        ) : (
          <>
            {!isLoading &&
              data.map((g, i) => (
                <Link
                  key={i}
                  href={g.secure_url}
                  passHref
                  prefetch={true}
                  data-sub-html={`<h4>Photo by - Eddie AMP </h4> <p class="date"> ${moment(
                    g.created_at
                  )
                    .startOf("hour")
                    .fromNow()}</p>`}
                >
                  <Image
                    className="w-full md:w-96  h-auto object-cover mb-2 md:mb-3 mx-auto"
                    src={g.secure_url}
                    alt=""
                    placeholder="blur"
                    blurDataURL={g.secure_url}
                    width={1200}
                    height={900}
                    priority={true}
                  />
                </Link>
              ))}
          </>
        )}
      </LightGallery>
    </section>
  );
};

export default Portfolio;
