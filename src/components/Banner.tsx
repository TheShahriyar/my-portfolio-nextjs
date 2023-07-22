import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner-section h-screen relative">
      <div className="static">
        <Image
          src="/banner.jpg"
          alt="Shahriyar Ahmed portfolio banner"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <h1
            className={`text-primary text-[70px] font-kausan !font-bold mb-10`}
          >
            {`I'm Shahriyar Ahmed`}
          </h1>
          <h2 className="text-white text-2xl mb-12">Front End Developer</h2>
          <Link
            href="#"
            className="text-white bg-transparent text-xs uppercase border border-white rounded-sm py-3 px-12 transition-all duration-[400] hover:bg-primary hover:border-primary"
          >
            About me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
