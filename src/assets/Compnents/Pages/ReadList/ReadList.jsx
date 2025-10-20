import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Apps/Apps";

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [readLists, setReadLists] = useState([])
    const [sort, setSort] = useState("");


    useEffect(() => {
      const savedList = JSON?.parse(localStorage?.getItem('readList'))
      console.log(savedList);
      
      // if(savedList) setReadLists(savedList)
    setReadList(savedList)
    }, [])
    
   

   
    
    

    const handleSort = (type) => {
        setSort(type)
        if (type === "pages") {
            const sortedByPage = [...readList].sort((a, b) => 
              a.totalPages - b.totalPages);
            setReadList(sortedByPage)
            console.log(sortedByPage)
        }
        if (type === "ratings") {
            const sortedByrating = [...readList].sort((a, b) => 
              a.rating - b.rating);
            setReadList(sortedByrating)
        }

}


  return (
      <div className=" justify-end">
        <div className="text-center items-center">
          <h1 className="font-bold text-4xl items-center mt-2.5">Your Installed Apps</h1>
        <h3 className="font-normal text-2xl my-2.5">Explore All Trending Apps on the Market developed by us</h3>
        </div>
      <Tabs>
        <TabList>
          <div className="flex justify-between">
            <Tab>Apps Found</Tab>
          <Tab>
            <details className="dropdown ">
              {/* <summary className="btn m-1">sort By Size  : {sort?sort:""}</summary> */}
  <ul className="menu dropdown-content bg-base-100 
  rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>pages</a></li>
    <li><a onClick={()=>handleSort("ratings")}>ratings</a></li>
  </ul>
</details>
          </Tab>
          </div>
        </TabList>               
      </Tabs>
     <div>
      {readList.map(p=> (
      <div className="max-w-[800px] h-[150px] flex items-center justify-between gap-4 p-4 
      bg-base-100 shadow-md rounded-lg border mb-4">
  <div className="flex items-center gap-4">
    <figure className="w-20 h-20">
      <img
        src={p.image}
        alt="App Icon"
        className="w-full h-full object-cover rounded"
      />
    </figure>
    <div className="ml-4">
      <h2 className="text-lg font-bold">{p.bookName}</h2>
      <ul className="flex gap-2 mt-2">
        <li><span className="badge badge-outline">📦 {p.size}MB</span></li>
        <li><span className="badge badge-outline">⬇️ {p.downloads}K</span></li>
        <li><span className="badge badge-outline">⭐ {p.rating}</span></li>
      </ul>
    </div>
  </div>
  <button className="btn btn-success btn-sm">Install</button>
</div>
))}
</div>

</div>
 
    
  );
};


export default ReadList;
