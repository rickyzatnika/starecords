"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { RiArrowRightSLine } from "react-icons/ri";
import { MdMapsHomeWork, MdPhoneIphone, MdMail } from "react-icons/md";
import data from '@/utils/data'
import ContactForm from '@/components/ContactForm/ContactForm'

const poppins = Poppins({ subsets: ['latin'], weight: ["400"], crossOrigin: "true" });


export default function Home() {
  const { mode } = useContext(ThemeContext);

  return (

    <section className={`w-full h-full ${poppins.className} `} >
      <div className="hero min-h-screen ">
        <div className="hero-content flex flex-col leading-relaxed items-start md:items-center justify-center ">
          <div className='text-left md:text-center'>
            <h1 className="text-4xl md:text-5xl relative">MUSIC <span className='text-[#FDDE13] tracking-widest font-bold font-[Coco]'>RECORDING</span> STUDIO</h1>
            <h3 className="text-md md:text-2xl my-2">Berkarya dengan Lebih dari Sekedar Catatan <br />Kualitas Tinggi dan Inovasi di Setiap Project</h3>
          </div>
          <p className="py-4 md:py-6 text-zinc-500 px-0 md:px-6 text-left md:text-center">Kami adalah sebuah music studio recording yang berdedikasi untuk memberikan pengalaman rekaman berkualitas dan memukau bagi para musisi dan penggemar musik di seluruh dunia.</p>
          <Link href="/about" className="btn btn-outline hover:bg-transparent hover:text-zinc-500">See Project</Link>
        </div>
      </div>
      {/* About Us Section */}
      <div className='w-full px-3 md:px-0 flex gap-4 flex-col-reverse md:flex-row-reverse items-start h-full relative z-30'>
        <div className='flex-1 relative'>
          <Image src="/SRE.png" alt='sre' width={1200} height={900} priority={true} className="object-cover" />
          <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black z-10'></div>
        </div>
        <div className='flex-1 mb-6 md:mb-0'>
          <div>
            <h2 className='text-2xl'>Tentang Kami</h2>
            <p className='text-sm text-zinc-500 leading-relaxed py-6 px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia provident autem cupiditate, quis perspiciatis aliquid enim veniam eum quisquam. Reiciendis dolor nihil aut enim minima, amet cum, consequuntur officiis veritatis aliquam natus quo totam inventore, vero officia cumque quis possimus explicabo modi sed voluptates?</p>
          </div>
          <Link href="/about" className='btn btn-outline hover:bg-transparent hover:text-zinc-500' >Selengkapnya</Link>
        </div>
      </div>
      {/* Why Choose Us Section*/}
      <div className='w-full h-full px-2 py-20 '>
        <h2 className='mb-6 text-sm md:text-xl'>Alasan mengapa bekerja sama dengan <span className='text-red-600 font-semibold'>STARECORDS</span> ??</h2>
        <div className={`flex flex-col p-4 py-8 md:flex-row items-start justify-center gap-4 ${mode === "light" ? "bg-zinc-100 md:bg-inherit shadow-xl md:shadow-none rounded-t-3xl shadow-black/20" : ""}`}>
          {data.map((item) => (
            <div key={item.id} className='flex flex-col text-center items-center justify-between gap-6'>
              <span className='text-6xl text-inherit'>{item.icon}</span>
              <div className='flex flex-col items-center relative'>
                <div className='flex items-center justify-between'>
                  <div className='border border-zinc-400 px-2 rounded-full absolute left-0 top-0'>{item.id}</div>
                  <h3 className='text-md md:text-xl mb-3'>{item.title}</h3>
                </div>
                <p className='text-[0.85rem] px-3 leading-relaxed text-justify mb-8 md:mb-0'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Services Section */}
      <div className='relative overflow-hidden w-full h-full'>
        <div className='w-full h-full py-4 md:py-14'>
          <h2 className="font-[Dirty-Bos] mb-10 pl-2 text-left text-3xl md:text-4xl   font-semibold">
            What We Do... ??
          </h2>
          <div className='relative overflow-hidden w-full h-full'>
            <Image src="/inst.png" alt="" width={1200} height={1200} className='object-cover' priority={true} />
          </div>

          <div className='w-full h-full px-2 py-5 md:py-14 relative'>
            <div className={`font-[Dirty-Bos]  z-40 text-2xl md:text-4xl flex flex-wrap items-center justify-center gap-0 md:gap-2 rounded-lg p-3 md:p-8  bottom-0 md:-bottom-44 shadow-xl   mx-auto left-0 right-0 w-full md:w-[90%]  ${mode === "light" ? " bg-zinc-100 shadow-xl shadow-black/20 transition-all duration-300 ease-linear" : "  bg-[#1E1E1E] text-zinc-50 transition-all duration-300 ease-linear"}`}>
              <p className=' '>RECORDING INSTRUMENT & VOCAL -</p> <p className='text-[#FDDE13]'>MUSIC ARRANGEMENT</p> <p className='pl-1'>- VOCAL EDITING -</p>
              <p className='text-[#FDDE13]'>MIXING & MASTERING</p> <p className=' '>- COVER SONG FULL INSTRUMENT -</p> <p className='text-[#FDDE13]'>COVER SONG ACCOUSTIC{" "}</p>
              <p className='pl-1'> - JINGLE MUSIC -</p>  <p className='text-[#FDDE13]'>SCORING FILM</p> <p className=' pl-1'>- VIDEO CLIP -</p>
            </div>
          </div>
          <div
            className="w-full flex flex-col md:flex-row gap-10 md:gap-30 items-center justify-center items"
          >
            <Link
              href="/about"
              className="overflow-hidden group item border-2 border-[#bbb] w-full md:w-96 h-80 relative item"
            >
              <pre className='text-zinc-400 p-1'>Cassette, CD/DVD, Vyni</pre>
              <span className="absolute flex gap-2 items-center bg-white/10  left-0 px-2 py-1 bottom-0 w-full font-[Coco] text-xl group text-[#FDDE13] md:text-zinc-100 group-hover:text-yellow-400 backdrop-blur">
                Fisical Relase <RiArrowRightSLine className="arrows" />
              </span>
            </Link>
            <Link
              href="/about"
              className="overflow-hidden group item border-2 border-[#bbb] w-full md:w-96 h-80 relative item "
            >
              <pre className='text-zinc-400 p-1'>Music,Event, Wedding, Regular..</pre>
              <span className="absolute flex gap-2 items-center bg-white/10  left-0 px-2 py-1 bottom-0 w-full  font-[Coco] text-xl group text-[#FDDE13] md:text-zinc-100 group-hover:text-yellow-400  backdrop-blur">
                Entertainment <RiArrowRightSLine className="arrows" />
              </span>
            </Link>
            <Link
              href="/about"
              className="group overflow-hidden item border-2 border-[#bbb] w-full md:w-96 h-80 relative item "
            >
              <pre className='text-zinc-400 p-1'>Spotify, Apple Music, Youtube, Etc</pre>
              <span className="absolute flex gap-2 items-center bg-white/10  left-0 px-2 py-1 bottom-0 w-full  font-[Coco] text-xl group text-[#FDDE13] md:text-zinc-100 group-hover:text-yellow-400  backdrop-blur">
                Digital Release <RiArrowRightSLine className="arrows" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className='w-full h-full py-0 md:py-20'>
        <div className={` py-10 ${mode === "light" ? "bg-[#040608] text-zinc-200" : "bg-zinc-100"} text-zinc-500`}>
          <h2 className={`text-center text-2xl md:text-4xl w-full mb-14 max-w-md mx-auto ${mode === "light" ? "text-zinc-100" : "text-zinc-800"}`}>Let`s discuss on <span className="font-bold">something</span> cool together</h2>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-6 pb-14'>
            <div className="col-span-1 md:col-span-8">
              <ContactForm />
            </div>
            <div className="col-span-1 md:col-span-4">
              <div className="space-y-4 px-6 sm:px-0 text-xs sm:text-md relative top-4 md:top-6">
                <div

                  className="flex gap-2 items-start md:items-center"
                >
                  <MdMapsHomeWork size={25} />
                  <p className='text-sm md:text-[0.925rem]'>Jl.Sarimadu Barat no.39 Bandung 30124</p>
                </div>
                <div

                  className="flex gap-2 items-center"
                >
                  <MdPhoneIphone size={25} />
                  <p className='text-sm md:text-[0.925rem]'>
                    0851 5507 7606 <span className="text-xs">(Wandi)</span>{" "}
                  </p>
                </div>
                <div

                  className="flex gap-2 items-center"
                >
                  <MdPhoneIphone size={25} />
                  <p className='text-sm md:text-[0.925rem]'>
                    0813 2048 6864 <span className="text-xs">(Tito)</span>{" "}
                  </p>
                </div>
                <div

                  className="flex gap-2 items-center"
                >
                  <MdMail size={25} />
                  <p className='text-sm md:text-[0.925rem]'>starecords.office.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >


  )
}
