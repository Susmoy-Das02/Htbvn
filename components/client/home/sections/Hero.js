import Image from "next/image";
import React from "react";
import garments from "../../../../public/garments.jpg";
import wood from "../../../../public/wood.jpg";
import mineral from "../../../../public/mineral.jpg";
import { en } from "../../../../public/locales/home/en";
import { vn } from "../../../../public/locales/home/vn";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vn;
  return (
    <div
      id="seeHero"
      className="w-full h-[500px] 3xl:h-[700px] relative overflow-hidden text-white bg-[#4e4c4c] pt-5"
    >
      <div className="w-full h-full absolute opacity-0 myAnimation slideShowItem">
        <Image
          src={garments}
          className="w-full h-full object-cover myImgAnimation"
          alt=""
          width={500}
          height={500}
        />
        <div className="max-w-[70%] lg:max-w-[50%] absolute top-[50%] left-[15%] lg:left-[25%] translate-y-[-50%]  py-10 px-5 text-center">
          <h1 className="text-[1.8rem] lg:text-[4rem] font-sans font-bold uppercase pb-4 tracking-wide">
            {t.GrabYourWinterNeedsoff}
          </h1>
          <p className="hidden text-3xl font-medium text-white md:mt-4 md:block oswald">
            {t.Limitedtimeonly}
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute opacity-0 myAnimation slideShowItem">
        <Image
          src={wood}
          className="w-full h-full object-cover myImgAnimation"
          alt=""
          width={500}
          height={500}
        />
        <div className="max-w-[70%] lg:max-w-[50%] absolute top-[50%] left-[15%] lg:left-[25%] translate-y-[-50%]  py-10 px-5 text-center">
          <h1 className="text-[1.8rem] lg:text-[4rem] font-sans font-bold uppercase pb-4 tracking-wide">
            {t.ENJOY50OFFVOUCHER}
          </h1>
          <p className="hidden text-3xl font-medium text-white md:mt-4 md:block oswald">
            {t.Limitedtimeonly}
          </p>
        </div>
      </div>

      <div className="w-full h-full absolute opacity-0 myAnimation slideShowItem">
        <Image
          src={mineral}
          className="w-full h-full object-cover myImgAnimation"
          alt=""
        />
        <div className="max-w-[70%] lg:max-w-[50%] absolute top-[50%] left-[15%] lg:left-[25%] translate-y-[-50%]  py-10 px-5 text-center">
          <h1 className="text-[1.8rem] lg:text-[4rem] font-sans font-bold uppercase pb-4 tracking-wide">
            {t.ENJOY50OFFVOUCHER}
          </h1>
          <p className="hidden text-3xl font-medium text-white md:mt-4 md:block oswald">
            {t.Limitedtimeonly}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
