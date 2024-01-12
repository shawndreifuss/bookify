import React from 'react'
import TopBar from './TopBar'
import HomeIcon from '@mui/icons-material/Home';
import SearchBar from './SearchBar';
import Categories from './Categories';
import BookCard from './BookCard';


const Navbar = () => {
  return (
   
<>
<TopBar/>
<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-[24rem] overflow-y-none  pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto overscroll-none overflow-none bg-white dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <HomeIcon/>
               <span className="ms-3">Home</span>
            </a>
         </li>
        <SearchBar />
        <Categories />
        <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">My Library</span>
            </a>
         </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
               <span className="flex-1 ms-3 whitespace-nowrap underlined" style={{cursor: 'auto'}}>Recents</span>
            </a>
         </li>
         <div className="container mx-2 h-[90rem] z-50 overflow-y-scroll ">
         <BookCard className='scrollbar-hide' />
         </div>
      </ul>
   </div>
</aside>

</>
  )
}

export default Navbar