// // pages/model/[id].js

// import { useRouter } from 'next/router';

// export default function ModelPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <div className="min-h-screen bg-[#ececec]">
//       <nav className="bg-white shadow-md h-[70px] mt-[10px]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <a href="/pages/model/[id]" className="text-xl font-bold text-gray-800">
//                 <img src="https://www.qwebcare.com/help/images/hp-logo.gif" alt="HP Logo" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="flex items-center justify-center py-20">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-3xl md:text-4xl mb-4">Model: {id}</h1>
//           <p className="text-lg md:text-xl mb-4">Details about the {id} model.</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useRouter } from 'next/router';

export default function ModelPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen bg-[#ececec]">
      <nav className="bg-white shadow-md h-[70px] mt-[10px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-800">
                <img src="https://www.qwebcare.com/help/images/hp-logo.gif" alt="HP Logo" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl mb-4">Model: {id}</h1>
          <p className="text-lg md:text-xl mb-4">Details about the {id} model.</p>
        </div>
      </div>
    </div>
  );
}
