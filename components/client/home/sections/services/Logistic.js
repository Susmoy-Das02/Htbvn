import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { en } from "../../../../../public/locales/home/en";
import { vn } from "../../../../../public/locales/home/vn";

const Logistic = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vn;
  const data = [
    {
      id: "1",
      img: "/logistic.png",
      price: "10",
      name: "Warehousing",
      Discription:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "2",
      img: "/logistic2.png",
      price: "50",
      name: "materials handling",
      Discription:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "3",
      img: "/logistic.png",
      price: "20",
      name: "Warehousing",
      Discription:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "4",
      img: "/logistic2.png",
      price: "30",
      name: "materials handling",
      Discription:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
  ];
  return (
    <section>
      <div className="text-left">
        <h1 className="font-medium text-2xl p-5 text-[#372948]">
          {t.LogisticService}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col bg-[#372948] border text-[#FFECEF] shadow-sm rounded-xl items-center mx-5"
            >
              <div className="p-3">
                <Image
                  width={300}
                  height={200}
                  src={item.img}
                  alt="Image Description"
                />
              </div>

              <div className="p-4 md:p-5">
                <h3 className="text-base font-medium uppercase">{item.name}</h3>
                <h3 className="text-2xl font-medium uppercase tracking-wider">
                  {item.price} $
                </h3>
                <p className="mt-1 tracking-wider text-left text-sm">
                  {item.Discription}
                </p>
                <button className="w-full mt-2  bg-[#FFECEF] py-3 text-[#372948] text-xs rounded-lg roboto uppercase flex justify-around px-10 ">
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Logistic;
