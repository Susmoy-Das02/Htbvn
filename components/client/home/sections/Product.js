import { useRouter } from "next/router";
import React from "react";
import { en } from "../../../../public/locales/home/en";
import { vn } from "../../../../public/locales/home/vn";
import Garments from "./products/Garments";
import Mineral from "./products/Mineral";
import Wood from "./products/Wood";

const Produtcs = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vn;
  return (
    <section className="bg-[#FFCACA] py-12">
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold  text-[#372948] md:text-5xl roboto">
          {t.OurProducts}
        </h1>
        <Garments />
        <Wood />
        <Mineral />
      </div>
    </section>
  );
};

export default Produtcs;
