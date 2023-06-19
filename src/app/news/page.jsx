import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import axios from "axios";

export const metadata = {
  title: "Starecords - News",
  description: "Generated by create next app",
};

async function getData() {
  const res = await axios.get("https://ticket-server.webqodes.com/blog-post", {
    cache: "no-store", // this will fresh data on every fetch request;
    // next: { revalidate: 10 }, // and this , will be refresh data every 10 seconds;
  });

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

const BlogPost = async () => {
  const data = await getData();

  return (
    <>
      <div className="w-full h-full py-20 px-4 md:px-20 lg:px-24  ">
        {data.map((post) => (
          <div
            key={post.id}
            className="w-full group test py-8 flex flex-col md:flex-row items-start gap-4"
          >
            <div className="group w-full md:w-52 h-full md:h-52 mx-auto md:mx-0 mb-0 md:mb-6 overflow-hidden">
              <Image
                src={post.url}
                placeholder="blur"
                blurDataURL={post.url}
                alt=""
                width={1250}
                height={900}
                objectFit="contain"
                priority={true}
                className="scale-100 group-hover:scale-110 transition-all duration-1000 ease-linear"
              />
            </div>
            <Link
              href={`/news/${post.slug}`}
              className="flex flex-col gap-4 group py-1 mb-8 md:mb-0"
            >
              <h1 className="uppercase relative left-0 group-hover:left-3 transition-all duration-200 ease-out group-hover:text-red-600">
                {post.title}
              </h1>
              <p className="text-sm lowercase relative left-0 group-hover:left-3 transition-all duration-500 ease-linear delay-100 group-hover:text-zinc-600">
                {post.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPost;
