"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Image from "next/legacy/image";
import { Poppins } from "next/font/google";
import { data } from "./data.js";
import { ThemeContext } from "@/context/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  crossOrigin: "true",
});

const About = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <section className="w-full h-full">
      <div className="w-full md:w-[60%] mx-auto h-full px-2 md:px-4 py-8">
        <p
          className={`text-justify py-8 text-sm md:text-[1rem] leading-relaxed ${poppins.className}`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          doloribus possimus iste sint ratione id illum placeat dolorem rem?
          Deserunt, officiis laborum officia recusandae magni provident vitae
          aliquam ab omnis reiciendis amet quod adipisci ratione molestias
          temporibus modi illum suscipit quae? Explicabo illo itaque iusto, est
          quis fuga ipsam optio asperiores quo ea totam perferendis laboriosam
          omnis veritatis delectus corporis error quia. Consectetur accusamus
          eum nulla! Libero temporibus magnam cumque unde, ad necessitatibus
          saepe explicabo atque. Tempore quae magni alias!
        </p>
      </div>
      {data?.map((item) => (
        <div
          key={item?.id}
          className={`w-full h-full flex flex-col px-2 md:flex-row items-center gap-5 md:py-12 mt-12 md:mt-24 ${styles.container}`}
        >
          <div className="w-full h-full flex-auto md:flex-1">
            <h3
              className={`text-3xl tracking-widest font-[Coco] ${
                mode === "light" ? "text-zinc-800 " : " text-[#FDDE13] "
              }`}
            >
              {item?.title}
            </h3>
            <p className="mb-4 pt-1 italic">{item?.subs}</p>
            <p
              className={`{leading-relaxed text-[0.850rem] md:text-[1rem] pl-1 ${poppins.className}`}
            >
              {item?.desc}
            </p>
          </div>
          <div className="w-full md:w-96 h-auto ">
            <Image
              src={item?.image}
              alt={item?.title}
              width={1200}
              height={900}
              priority={true}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
