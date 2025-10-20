import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; 


const About = ({singleBook}) => {

    const {bookId,image,rating,title,downloads,publisher,IconDownloads} = singleBook || {};

    return (
           <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-[260px] h-[380px] shadow-sm border mt-8">
        <figure className=' '>
                <img
                    
            src={image}
            alt="Shoes" />
        </figure>
            <div className="card-body ">
                
                <div className='flex justify-center gap-10'>
                </div>
          <h2 className="card-title">
           
          </h2>
            <p>{title}{publisher}</p>

          <div className="card-actions justify-between">
                    <div className="badge badge-outline">{IconDownloads}⬇️{downloads}M</div>
                    <div className="badge badge-outline"><FaStarHalfAlt />{rating}</div>
          </div>
        </div>
      </div>
        </Link>
    );
};

export default About;