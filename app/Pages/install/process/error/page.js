// // pages/error.js
// export default function ErrorPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
//         <div>
//             {/* <img src="https://www.qwebcare.com/help/images/hp-logo.gif"></img> */}
//         </div>
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative" style={{ minHeight: '600px' }}>
//         {/* Blue Triangle */}
//         <div className="absolute bottom-0 left-0 w-full h-24 bg-blue-600" 
//              style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>

//         {/* Content */}
//         <div className="p-10">
//           <h1 className="text-2xl font-semibold mb-4">Installing</h1>
//           <p className="text-gray-500 mb-6">Fatal error occurred during installation..</p>
//           <div className="flex justify-center mb-6">
//             <img
//               src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/printer_error.png" // Replace this with the actual path to the printer error image
//               alt="Printer Error"
//               width={150}
//               height={150}
//             />
//           </div>
//           <p className="text-gray-600 mb-4">
//           A problem occurred while preparing to install software to your system.please restart you computer,and run this installer again.if the problem persists,
       
//           </p>
//           <p className="text-gray-600 mb-4">
//             Please don't try to setup again 
//           </p>
//           <p className="font-semibold">Please Contact HP Support for</p>
//           <a href="#" className="text-blue-600 font-bold text-xl mt-4 inline-block">Through Chat</a>
//         </div>

//         {/* Footer */}
//         <div className="bg-white p-6 flex justify-center items-center">
//           <img
//             src="https://www.qwebcare.com/help/images/hp-logo.gif" // Replace this with the actual path to the HP logo
//             alt="HP Logo"
//             width={50}
//             height={50}
//           />
//           <span className="ml-4 text-blue-600 text-lg">24x7 HP Assistance</span>
//         </div>
//       </div>
//     </div>
//   );
// }




// pages/error.js
export default function ErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        {/* <img
            src="data:image/png;base64,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" // Replace this with the actual path to the printer error image
            alt="Printer Error"
            width={150}
            height={150}
            className="mb-[-92px] ml-[653x]"
            /> */}
        <h1 className="text-2xl font-semibold mb-4">Installing</h1>
        <p className="text-gray-500 mb-6">Fatal error occurred during installation..</p>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative" style={{ minHeight: '600px' }}>
          {/* Blue Triangle with Logo and Text Inside */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-blue-600 flex items-center justify-center" 
               style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}>
            <div className="flex items-center justify-center ml-[-611px] bg-custom-blue">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/02/Colors-HP-Logo.jpg" // Replace this with the actual path to the HP logo
                alt="HP Logo"
                width={80}
                height={80}
              />
              <span className="ml-2 text-white text-lg">24x7 HP Assistance</span>
            </div>
          </div>
  
          {/* Content */}
          <div className="p-10">
        
            <div className="flex justify-center mb-6">
              <img
                src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/printer_error.png" // Replace this with the actual path to the printer error image
                alt="Printer Error"
                width={150}
                height={150}
              />
            </div>
            <p className="text-gray-600 mb-4">
              A problem occurred while preparing to install software to your system. Please restart your computer, and run this installer again. If the problem persists,
            </p>
            <p className="text-gray-600 mb-4">
              Please don't try to set up again.
            </p>
            <p className="font-semibold">Please Contact HP Support for</p>
            <a href="#" className="text-blue-600 font-bold text-xl mt-4 inline-block">Through Chat</a>
          </div>
        </div>
      </div>
    );
  }
  