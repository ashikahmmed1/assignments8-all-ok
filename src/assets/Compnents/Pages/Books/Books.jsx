import React, {Suspense, useEffect, useState } from 'react';
import About from '../About/About';


const  Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term
    ? allBooks.filter(allBooks =>
        allBooks?.bookName?.toLocaleLowerCase().includes(term)
      )
    : allBooks 
    
    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data => {
                const featuredData = data.slice(0, 20)
            setAllBooks(featuredData)
        })
    },[data])


 console.log(allBooks)
    return (
        <div>
           <div>
             <h1 className=' text-4xl font-bold text-center p-6'>Our All Applications</h1>
            <h1 className=' text-2xl font-normal text-center mb-15'>Explore All Apps on the Market developed by us. We code for Millions</h1>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-medium'>
                    <span>({searchedProducts.length})</span> Apps Found </h1>
                <label className='input'>
                    <input 
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)} 
                    type='search' 
                    placeholder='Search Apps' /> 
                </label>
            </div>
           </div>
            <Suspense fallback={<span>loading......</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    searchedProducts?.map((singleBook)=><About key={singleBook.bookId} singleBook={singleBook}></About>)
               }
                </div>
           </Suspense>
        </div>
    );
};

export default Books;