 /* eslint-disable @typescript-eslint/no-unused-vars */

 import Image from "next/image";
 import React from "react";
 
 function Products() {
   return (
     <main>
       <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-20 mb-52">
         <div className="sm:w-full md:w-full lg:w-[80%] sm:h-[80%] h-full ">
           {/* top side */}
           <div className="sm:pl-7 md:pl-0">
             <div className="border-l-[15px] border-red-500 rounded-sm">
               <span className=" mb-10 text-red-500 font-bold ml-3">
                 This Month
               </span>
             </div>
             <div className="flex justify-between">
               <h2 className="text-4xl font-bold mt-5">Best Selling Products</h2>
               <button className="sm:hidden md:block py-0 px-12 bg-red-500 text-white rounded-md ">
                 View All
               </button>
             </div>
           </div>
           {/* products */}
           {/* conatiner boxes */}
           <div className=" flex sm:flex-col md:flex-row justify-between mt-20 sm:items-center sm:gap-y-10 md:gap-y-0 sm:mt-16">
             <div>
               <div className="w-[220px] h-[175px] bg-gray-200 flex justify-center items-center">
                 <Image
                   src={"/images/image7.png"}
                   alt="Winter-Jacket"
                   width={150}
                   height={100}
                 ></Image>
               </div>
               {/* title */}
               <div className="flex flex-col">
                 <span className="font-bold text-lg">The north coat</span>
                 <div>
                   <span className="text-red-500 font-bold mt-1">$260</span>
                   <span className="line-through text-gray-500 ml-3">$360</span>
                 </div>
                 <div className="stars">
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="ml-3">(65)</span>
                 </div>
               </div>
             </div>
             <div>
               <div className="w-[220px] h-[175px] bg-gray-200 flex justify-center items-center">
                 <Image
                   src={"/images/image6 (2).png"}
                   alt="Handcarry-Bag"
                   width={150}
                   height={100}
                 ></Image>
               </div>
               {/* title */}
               <div className="flex flex-col">
                 <span className="font-bold text-lg">Gucci duffle bag</span>
                 <div>
                   <span className="text-red-500 font-bold mt-1">$960</span>
                   <span className="line-through text-gray-500 ml-3">$1160</span>
                 </div>
                 <div className="stars">
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="ml-3">(65)</span>
                 </div>
               </div>
             </div>
             <div>
               <div className="w-[220px] h-[175px] bg-gray-200 flex justify-center items-center">
                 <Image
                   src={"/images/image9.png"}
                   alt="CPU-cooler"
                   width={150}
                   height={100}
                 ></Image>
               </div>
               {/* title */}
               <div className="flex flex-col">
                 <span className="font-bold text-lg">RGB liquid CPU Cooler</span>
                 <div>
                   <span className="text-red-500 font-bold mt-1">$160</span>
                   <span className="line-through text-gray-500 ml-3">$170</span>
                 </div>
                 <div className="stars">
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="ml-3">(65)</span>
                 </div>
               </div>
             </div>
             <div>
               <div className="w-[220px] h-[175px] bg-gray-200 flex justify-center items-center">
                 <Image
                   src={"/images/image8.png"}
                   alt="Bookself"
                   width={100}
                   height={50}
                 ></Image>
               </div>
               {/* title */}
               <div className="flex flex-col">
                 <span className="font-bold text-lg">Small BookSelf</span>
                 <span className="text-red-500 font-bold mt-1">$360</span>
                 <div className="stars">
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="star text-yellow-300">&#9733;</span>
                   <span className="ml-3">(65)</span>
                 </div>
               </div>
             </div>
             {/* button */}
             <button className="sm:block md:hidden py-2  px-12 sm:mt-20  bg-red-500 text-white rounded-md ">
                 View All
               </button>
           </div>
         </div>
       </div>
     </main>
   );
 }
 
 export default Products;
 