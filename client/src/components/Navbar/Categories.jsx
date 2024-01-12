import React from 'react'

const Categories = () => {


  const categories = [
    {id: 1, name: "Fiction" },
    {id: 2, name: "Non-Fiction"},
    {id: 3, name: "Mystery"},
    {id: 4, name: "Science"},
    {id: 5, name: "Computer Science"},
    {id: 6, name: "Math"},
    {id: 7, name: "Sports"}
  ];






  return (
   

<div className="flex flex-col bg-white m-auto p-auto scrollbar-hide hide-scroll-bar">
      <div
        className="flex overflow-x-scroll scrollbar-hide pb-6 hide-scroll-bar"
      >
        {categories.map((category) => (
        <div key={category.id} className="inline-block px-3 ">
            <div key={category.id}
              className="h-9 w-max cursor-pointer  pl-2 plr-2 p-2 h-6 text-center max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >{category.name} </div>
          </div>
        ))}
        </div>
      </div>

  )
}

export default Categories