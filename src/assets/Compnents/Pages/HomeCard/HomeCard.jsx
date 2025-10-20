import React, {Suspense, useEffect, useState } from 'react';
import About from '../About/About';


const  HomeCart = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data => {
                const featuredData = data.slice(0, 12)
            setAllBooks(featuredData)
        })
    },[data])


 console.log(allBooks)
    return (
        <div>
           <div>
             <h1 className=' text-4xl font-bold text-center p-6'>Trending Apps</h1>
            <h1 className=' text-2xl font-normal text-center mb-15'>Explore All Trending Apps on the Market developed by us</h1>
           </div>
            <Suspense fallback={<span>loading......</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    allBooks?.map((singleBook)=><About key={singleBook.bookId} singleBook={singleBook}></About>)
               }
                </div>
           </Suspense>
        </div>
    );
};

export default HomeCart;