// import ContactForm from "@/components/ContactForm";
// import React from "react";

// const Page = () => {
//   return (
//     <div
//       style={{ backgroundImage: "url(bg-3.jpg)" }}
//       className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
//     >
//       <div
//         style={{ backgroundImage: "url(atombg-comp.webp" }}
//         className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
//       >
//         <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
//           <ContactForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;


import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp)" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>

      {/* ✅ WhatsApp Button */}
      <a
        href="https://wa.me/923004031131" // Replace with your number (Format: https://wa.me/<countrycode><number>)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-white"
        >
          <path d="M16.003 2.003c-7.732 0-14 6.268-14 14 0 2.466.64 4.875 1.856 7.002L2 30l7.205-1.835A13.885 13.885 0 0 0 16 30.002c7.732 0 14-6.268 14-14s-6.268-13.999-14-13.999zm0 25.997c-2.184 0-4.33-.547-6.23-1.588l-.446-.25-4.277 1.09 1.139-4.165-.292-.428a11.99 11.99 0 0 1-1.87-6.657c0-6.627 5.373-12 12-12s12 5.373 12 12c0 6.627-5.373 12-12 12zm6.636-8.527c-.363-.181-2.15-1.064-2.484-1.186-.334-.121-.578-.181-.822.182-.244.363-.944 1.186-1.157 1.43-.213.243-.427.273-.79.091-.363-.182-1.535-.566-2.924-1.805-1.08-.964-1.81-2.156-2.024-2.519-.213-.363-.023-.559.16-.74.164-.163.363-.425.545-.637.182-.213.243-.364.364-.607.122-.243.061-.456-.03-.637-.091-.182-.822-1.984-1.126-2.719-.297-.714-.6-.616-.822-.626l-.7-.012c-.243 0-.637.091-.97.455-.334.363-1.273 1.244-1.273 3.036s1.303 3.523 1.486 3.767c.182.243 2.563 3.916 6.21 5.484.869.376 1.548.601 2.078.769.874.278 1.67.239 2.297.145.7-.104 2.15-.877 2.456-1.723.303-.849.303-1.578.213-1.724-.091-.145-.333-.243-.697-.424z" />
        </svg>
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default Page;
