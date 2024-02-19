import React from "react";

const Collection = () => {
  return (
    <div className='bg-[url("/zara/zarabg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-10'>
      <div className="h-[590px] flex justify-center  flex-col md:flex-row items-center ">
        <div className="w-1/2"></div>
        <div className=" w-[200px] md:w-1/2">
          <img src="/zara/zara2.png" alt="" />
          <p className="text-white text-[16px]  md:w-[400px] font-semibod mt-10 text-">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button
            className="mt-9 py-3
          px-3 bg-white text-black border-2 "
          >
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
