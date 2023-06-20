import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full relative z-50 flex flex-col pt-14 gap-0  items-center justify-between ">
        <div className="footer bg-[#161616] py-14 p-8 text-base-content">
          <div className="flex flex-col">
            <Image
              src="/sre_logo.png"
              alt=""
              width={200}
              height={90}
              className="object-contain"
            />
            <p className="w-full max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              debitis.
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link
              href="/about/instrument"
              passHref={true}
              className="link link-hover"
            >
              Instrument Rent
            </Link>
            <Link
              href="/about/fisical"
              passHref={true}
              className="link link-hover"
            >
              Fisical Release
            </Link>
            <Link
              href="/about/digital"
              passHref={true}
              className="link link-hover"
            >
              Digital Release
            </Link>
            <Link
              href="/about/entertainment"
              passHref={true}
              className="link link-hover"
            >
              Music Entertainment
            </Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link href="" passHref={true} className="link link-hover">
              About us
            </Link>
            <Link href="" passHref={true} className="link link-hover">
              Portfolio
            </Link>
            <Link href="" passHref={true} className="link link-hover">
              News
            </Link>
            <Link href="" passHref={true} className="link link-hover">
              Contact
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link href="/" className="link link-hover">
              Terms of use
            </Link>
            <Link href="/" className="link link-hover">
              Privacy policy
            </Link>
            <Link href="/" className="link link-hover">
              Cookie policy
            </Link>
          </div>
        </div>
        <div className="w-full bg-[#0c0c0c] gap-5 p-8 flex items-center justify-center md:justify-between flex-col-reverse md:flex-row">
          <div className="text-sm text-zinc-400 ">
            <Link href="/" passHref={true}>
              Starecords.ent © 2023 All Right Reserved
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image src="/fb.png" alt="" width={20} height={20} />
            </Link>
            <Link href="/">
              <Image src="/ig.png" alt="" width={20} height={20} />
            </Link>
            <Link href="/">
              <Image src="/tt.png" alt="" width={20} height={20} />
            </Link>
            <Link href="/">
              <Image src="/yt.png" alt="" width={20} height={20} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
