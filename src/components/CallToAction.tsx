import Image from "next/image";
import Link from "next/link";
import React from "react";
import BGImage from "../images/bg10.jpg";

const CallToAction = () => {
  return (
    <div className="call-to-action-section py-12 md:py-20 relative">
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <Image
          src={BGImage}
          alt="Shahriyar Ahmed portfolio banner"
          sizes="100vw"
          quality={100}
          fill
          placeholder="blur"
          style={{
            objectFit: "cover",
            height: "100%",
          }}
        />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <h2
            className={`text-primary text-4xl md:text-[52px] font-kausan !font-bold mb-8 md:mb-12`}
          >
            {`Want to Hire me?`}
          </h2>
          <Link
            href="mailto:shahriyar.31dec@gmail.com"
            className="text-white bg-transparent text-xs uppercase border border-white rounded-sm py-3 px-12 transition-all duration-[400] hover:bg-primary hover:border-primary"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
