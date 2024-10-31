 /* eslint-disable @typescript-eslint/no-unused-vars */

 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faApple } from "@fortawesome/free-brands-svg-icons";
 import Image from "next/image";
 
 function Hero() {
   return (
     <div className="w-full h-[280px]  flex justify-center">
       <div className="bg-black h-full sm:w-full md:w-full lg:w-[80%] flex justify-between mt-10">
         {/* left side */}
         <div className="sm:ml-1 md:ml-8 sm:mt-8 md:mt-12  text-white">
           <div className="flex justify-center items-center gap-x-5 pl-0 mb-2">
             <span>
               <FontAwesomeIcon icon={faApple} className="w-[30px]" />
             </span>
             <span>iPhone 14 Series</span>
           </div>
           <div className="w-[200px] ml-8">
             <h1 className="text-4xl font-sans font-bold">
               Up to 10% off Voucher
             </h1>
             <button className="underline-offset-4 pt-4  hover:underline">
               Shop Now
             </button>
           </div>
         </div>
         {/* right side */}
         <div className="sm:mt-14 md:mt-1">
           <Image
             src="/images/iphone.png"
             alt="Hero-image"
             width={360}
             height={350}
             className="mr-14 mt-5"
           ></Image>
         </div>
       </div>
     </div>
   );
 }
 
 export default Hero;
 