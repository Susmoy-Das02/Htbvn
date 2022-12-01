import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { en } from "../../../../../public/locales/home/en";
import { vn } from "../../../../../public/locales/home/vn";

const Mineral = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vn;
  const data = [
    {
      id: "1",
      img: "/limestone.png",
      price: "10",
      name: "Limestone",
      Discription:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "2",
      img: "/limestone.png",
      price: "50",
      name: "Limestone",
      Discription:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "3",
      img: "/limestone.png",
      price: "20",
      name: "Limestone",
      Discription:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "4",
      img: "/limestone.png",
      price: "30",
      name: "Limestone",
      Discription:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
  ];
  return (
    <section>
      <div className="text-left">
        <h1 className="font-medium text-2xl p-5 text-[#372948]">
          {t.MineralsProducts}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col bg-[#FFECEF] border shadow-sm rounded-xl items-center mx-5"
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
                <h3 className="text-base font-medium uppercase text-gray-800 dark:text-white">
                  {item.name}
                </h3>
                <h3 className="text-2xl font-medium uppercase text-gray-800 dark:text-white tracking-wider">
                  {item.price} $
                </h3>
                <p className="mt-1 text-gray-800 dark:text-gray-400 tracking-wider text-left text-sm">
                  {item.Discription}
                </p>
                <Link
                  className="w-full mt-2  bg-[#251B37] hover:bg-[#ff8484] hover:text-[#251B37]  py-3 text-white text-xs rounded-lg roboto uppercase flex justify-around px-10 "
                  href="/SinglePage"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mineral;
