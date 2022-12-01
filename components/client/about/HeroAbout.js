import { useRouter } from "next/router";
import React from "react";
import { en } from "../../../public/locales/aboutUs/en";
import { vn } from "../../../public/locales/aboutUs/vn";

const HeroAbout = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vn;
  return (
    <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="bg-[#0000007e] p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center ">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl roboto">
            {t.DeliveringHappinessOnTheGo}
          </h2>

          <p className="hidden  max-w-md text-white/90 md:mt-6 md:block md:text-xl md:leading-relaxed">
            {t.HappyShopping}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
