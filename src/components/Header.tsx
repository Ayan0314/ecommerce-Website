 /* eslint-disable @typescript-eslint/no-unused-vars */

 import Link from "next/link";
 import React from "react";
 
 function Header() {
   return (
     <div className="w-full sm:h-[90px] md:h-[80px] flex justify-center items-center h-[80px] border-b-2">
       <div className="w-[80%] flex sm:flex-col md:flex-row justify-between h-[100%] items-center">
         {/* left side */}
         <div>
           {/* logo */}
           <h1 className="text-3xl font-bold sm:mt-1">Exclusive</h1>
         </div>
         {/* right side */}
         <div>
           <ul className="flex gap-x-7 mr-4 sm:mb-3 md:mb-0 sm:mt-2">
             <li>
               <Link href={"/"} className="hover:underline">
                 Home
               </Link>
             </li>
             <li>
               <Link href={"/"} className="hover:underline">
                 About
               </Link>
             </li>
             <li>
               <Link href={"/"} className="hover:underline">
                 Contact
               </Link>
             </li>
             <li>
               <Link href={"/"} className="hover:underline">
                 Sign up
               </Link>
             </li>
           </ul>
         </div>
       </div>
     </div>
   );
 }
 
 export default Header;
 