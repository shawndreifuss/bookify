// import React, { useEffect, useState } from "react";
import Bookmark from "../buttons/Bookmark";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Axios from "axios";
import Ratings from "../buttons/Ratings";




const BookCard = () => {

  // const apiKey = 'AIzaSyD5oJrYPAYytSswhYIIVqjNCsxsfI6LOdM'
  //         const year = new Date().getFullYear();
  //         const url = `https://www.googleapis.com/books/v1/volumes?q=year:${year}&maxResults=10&key=${apiKey}`;
      
  //  const [books, setBooks] = useState([]);

  //  useEffect(() => {
  //  Axios.get(url).then((res) => {
  //   console.log(res.data.items);
   
   
  
  // setBooks(res.data.items);
  
  //   }
  //   );    
  // }, [url]);


const books = [
  {
    id: 1,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlIbwUK0HrnP1xp7l7k5qXs2goRkaFH62Zg&usqp=CAU",
  },
  {
    id: 2,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmBE6sdJgN3kb1Hx0gFiQlVfnkFbZ9fwDwe-yz5GsmnJg3MpkkKSS3Gx_ddl0VPzdABY&usqp=CAU",
  },
  {
    id: 3,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YTxbSSSoEtR15mZlqeoDhyX_hz6u7b2BLg&usqp=CAU",
  },
  {
    id: 4,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREg5gOUB72Ye5Rzi15uiO4AYEaZjvGo80dCA&usqp=CAU",
  },
  {
    id: 5,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlIbwUK0HrnP1xp7l7k5qXs2goRkaFH62Zg&usqp=CAU",
  },
  {
    id: 6,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmBE6sdJgN3kb1Hx0gFiQlVfnkFbZ9fwDwe-yz5GsmnJg3MpkkKSS3Gx_ddl0VPzdABY&usqp=CAU",
  },
  {
    id: 7,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YTxbSSSoEtR15mZlqeoDhyX_hz6u7b2BLg&usqp=CAU",
  },
  {
    id: 8,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREg5gOUB72Ye5Rzi15uiO4AYEaZjvGo80dCA&usqp=CAU",
  },
  {
    id: 9,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlIbwUK0HrnP1xp7l7k5qXs2goRkaFH62Zg&usqp=CAU",
  },
  {
    id: 10,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmBE6sdJgN3kb1Hx0gFiQlVfnkFbZ9fwDwe-yz5GsmnJg3MpkkKSS3Gx_ddl0VPzdABY&usqp=CAU",
  },
  {
    id: 11,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YTxbSSSoEtR15mZlqeoDhyX_hz6u7b2BLg&usqp=CAU",
  },
  {
    id: 12,
    name: "Book Example Name of Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREg5gOUB72Ye5Rzi15uiO4AYEaZjvGo80dCA&usqp=CAU",
  },
];

  return (
    <>
      {books.map((book) => (
        <div
          key={book.id}
          className="container bg-[#f1f5f9] w-34   mb-4 pl-4 border-solid border-2 mb-1 mx-auto"
        >
          <div className=" mx-auto flex-col">
            <div className="flex row ">
               {book.img ? (
                <img
                  alt=""
                  className="w-24 ml-[-.5rem] h-[100%] pb-2 object-cover object-center rounded"
                  src={book.img}
                />
              ) : (
                <img
                  alt=""
                  className="w-16 h-24 pb-2 object-cover object-center rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6zKQpZZlZy4RnkXeMXslIklt9aZQdvLavA&usqp=CAU"
                />
              )} 

              <div className=" mt-2 w-46 flex-wrap   ml-2">
                <h1
                 
                  className="text-gray-900  space-around flex  "
                >
                  <div className="flex-col">
                    
                    <div className="text-left font-[12px] mt-1 text-sm w-32 h=2 flex flex-wrap overflow-hidden ">
                      {book.name}
                    </div>
                    <div className="text-[12px] w-30 h-fit mt-1 ">By: Shawn Dreifuss</div>
                  
                    <div className="text-[12px] w-30 h-fit ">Date: 12/12/23</div>
                  
                  </div>
                  <div className=" h-30 w-36 ml-[-35px] flex flex-wrap flex flex-col">
                    <div className="flex mb-2 flex-col   items-center ">
                     <Ratings  />
                      <span className="bg-blue-100 ml-10 mt-1 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Fiction
                    </span>
                      <div className="flex mt-8 ml-[-30px] gap-6 mt-1">
                       <Bookmark />
                        <button
                          type="button"
                          className=" z-50 mt-2 ml-24 gap-2  flex  h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sm rounded-lg text-sm px-2 py-1  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Read
                          <LocalLibraryIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
            <p className="text-[10px] flex-wrap h-12 overflow-hidden">
              Dui urna vehicula tincidunt pretium consequat luctus mi, platea
              fermentum conubia tempus ac orci. Pellentesque dictum malesuada
              cubilia faucibus dignissim mi nascetur senectus, augue ad libero
              efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus
              natoque.
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookCard;


// Uncomment when api calls are working 

// {books.map((book) => (
//   <div
//     key={book.accessInfo.id}
//     className="container bg-[#f1f5f9] w-34   mb-4 pl-4 border-solid border-2 mb-1 mx-auto"
//   >
//     <div className=" mx-auto flex-col">
//       <div className="flex row ">
//          {book.volumeInfo.imageLinks ? (
//           <img
//             alt=""
//             className="w-24 ml-[-.5rem] h-[100%] pb-2 object-cover object-center rounded"
//             src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''}
//           />
//         ) : (
//           <img
//             alt=""
//             className="w-16 h-24 pb-2 object-cover object-center rounded"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6zKQpZZlZy4RnkXeMXslIklt9aZQdvLavA&usqp=CAU"
//           />
//         )} 

//         <div className=" mt-2 w-46 flex-wrap overflow-hidden  ml-2">
//           <h1
           
//             className="text-gray-900 mt-1 space-around flex  "
//           >
//             <div className="flex-col">
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
//               {book.volumeInfo.categories}
//               </span>
//               <div className="text-left font-[12px] mt-1 text-sm w-32 max-h-20 flex flex-wrap overflow-hidden ">
//                 {book.volumeInfo.title}
//               </div>
//               <br />
//               <div className="text-[12px] w-30 h-fit ">By: {book.volumeInfo}</div>
//                {book.volumeInfo.publishedDate ? (
//               <div className="text-[12px] w-30 h-fit ">Date: {book.volumeInfo.publishedDate}</div>
//               ) : ( <></> )}
//             </div>
//             <div className=" h-30 w-36 ml-[-20px] flex flex-wrap overflow-hidden   flex flex-col">
//               <div className="flex mb-2 flex-col items-center ">
//                 <span className="flex">
//                   <svg
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//                   </svg>
//                   <svg
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//                   </svg>
//                   <svg
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//                   </svg>
//                   <svg
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//                   </svg>
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//                   </svg>
//                 </span>
//                 <span className="text-gray-600 text-center w-full font-[10px] text-[12px]">
//                   200+ Reviews
//                 </span>
//                 <div className="flex mt-8 justify-between gap-4 align-center mt-10">
//                  <Bookmark />
//                   <button
//                     type="button"
//                     className="mt-5 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                   >
//                     Read
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </h1>
//         </div>
//       </div>
//       <p className="text-[10px] flex-wrap h-12 overflow-hidden">
//         Dui urna vehicula tincidunt pretium consequat luctus mi, platea
//         fermentum conubia tempus ac orci. Pellentesque dictum malesuada
//         cubilia faucibus dignissim mi nascetur senectus, augue ad libero
//         efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus
//         natoque.
//       </p>
//     </div>
//   </div>
// ))}

