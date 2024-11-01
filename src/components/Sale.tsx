  import Image from "next/image";
 import React from "react";
 
 function Sale() {
   return (
     <main>
       <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-24">
         <div className="sm:w-full md:w-full lg:w-[80%] h-full ">
           {/* top side */}
           <div className="sm:pl-7 md:pl-0">
             <div className="border-l-[15px] border-red-500 rounded-sm">
               <span className=" mb-10 text-red-500 font-bold ml-3">
                 Today&apos;s
               </span>
             </div>
             <h2 className="text-4xl font-bold mt-5">Flash Sales</h2>
           </div>
           {/* products */}
           {/* conatiner boxes */}
           <div className=" flex sm:flex-col md:flex-row justify-between mt-7 sm:items-center sm:gap-y-10 md:gap-y-0 sm:mt-16">
             <div>
               <div className="w-[220px] h-[175px] bg-gray-200 flex justify-center items-center">
                 <Image
                   src={"/images/controller.png"}
                   alt="gaming-controller"
                   width={150}
                   height={100}
                 ></Image>
               </div>
               {/* title */}
               <div className="flex flex-col">
                 <span className="font-bold text-lg">HAVIT HV-G92 Gamepad</span>
                 <div>
                   <span className="text-red-500 font-bold mt-1">$120</span>
                   <span className="line-through text-gray-500 ml-3">$160</span>
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
                   src={"/images/keyboard.png"}
                   alt="gaming-keyboard"
                   width={150}
                   height={100}
                 ></Image>
               </div>
               {/* title */}
               <div className="flex flex-col">
                 <span className="font-bold text-lg">AK-900 Wired Keyboard</span>
                 <div>
                   <span className="text-red-500 font-bold mt-1">$120</span>
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
                   src={"/images/led.png"}
                   alt="LED"
                   width={150}
                   height={100}
                 ></Image>
               </div>
               {/* title */}
               <div className="flex flex-col">
                 <span className="font-bold text-lg">
                   IPS LCD Gaming Monitor
                 </span>
                 <div>
                   <span className="text-red-500 font-bold mt-1">$120</span>
                   <span className="line-through text-gray-500 ml-3">$400</span>
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
                   src={"/images/chair.png"}
                   alt="Chair"
                   width={100}
                   height={50}
                 ></Image>
               </div>
               {/* title */}
               <div className="flex flex-col">
                 <span className="font-bold text-lg">
                   S-Series Comfort Chair
                 </span>
                 <div>
                   <span className="text-red-500 font-bold mt-1">$120</span>
                   <span className="line-through text-gray-500 ml-3">$400</span>
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
           </div>
         </div>
       </div>
       <button className="py-3 px-8 bg-red-500 text-white rounded-md sm:ml-[120px] md:ml-[550px] mt-[160px]">
         View All Products
       </button>
       <div className="border-b-2 w-[80%] sm:mx-10 md:mx-32 ml-[140px] mt-[50px]"></div>
     </main>
   );
 }
 
 export default Sale;
 