import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full flex flex-col pt-14 gap-0  items-center justify-between ">
        <div className="footer bg-zinc-900  p-8 text-base-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
        <div className="w-full bg-[#0c0c0c] gap-5 p-8 flex items-center justify-center md:justify-between flex-col-reverse md:flex-row">
          <div className="text-md text-zinc-300">
            <Link href="/" passHref={true}>
              © Starecords.ent 2023
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
