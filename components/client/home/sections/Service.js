import { useRouter } from "next/router";
import React from "react";
import { en } from "../../../../public/locales/home/en";
import { vn } from "../../../../public/locales/home/vn";
import Logistic from "./services/Logistic";

const Service = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vn;
  return (
    <section className="bg-[#FFECEF] py-12">
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold  text-[#372948] md:text-5xl roboto">
          {t.OurServices}
        </h1>
        <Logistic />
      </div>
    </section>
  );
};

export default Service;
