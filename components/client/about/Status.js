import React from "react";

const Status = () => {
  return (
    <section className="bg-[#FFECEF]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#251B37] sm:text-4xl">
            Trusted by eCommerce Businesses
          </h2>

          <p className="mt-4 text-[#251B37] sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Sales
              </dt>

              <dd className="text-4xl font-extrabold text-[#251B37] md:text-5xl">
                $4.8m
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Official Addons
              </dt>

              <dd className="text-4xl font-extrabold text-[#251B37] md:text-5xl">
                24
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Addons
              </dt>

              <dd className="text-4xl font-extrabold text-[#251B37] md:text-5xl">
                86
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Addons
              </dt>

              <dd className="text-4xl font-extrabold text-[#251B37] md:text-5xl">
                86
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Status;
