import { notFound } from "next/navigation";
import React from "react";
import axios from "axios";

async function getData(slug) {
  const res = await axios.get(
    `https://ticket-server.webqodes.com/blog-post/${slug}`,
    {
      cache: "no-store", // this will fresh data on every fetch request;
      // next: { revalidate: 10 }, // and this , will be refresh data every 10 seconds;
    }
  );
  if (!res) {
    return notFound();
  }
  return res.data;
}

export async function generateMetadata({ params }) {
  const post = await getData(params.slug);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogDetail = async ({ params }) => {
  const data = await getData(params.slug);

  return <div className="pt-20 uppercase">{data.title}</div>;
};

export default BlogDetail;
