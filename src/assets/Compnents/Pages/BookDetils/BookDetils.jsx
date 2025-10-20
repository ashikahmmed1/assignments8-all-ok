
import { useParams, useLoaderData } from "react-router-dom";
import { FaStar, FaDownload } from "react-icons/fa";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  
  const book = data.find((b) => b.bookId === parseInt(id));

  if (!book) {
    return <div className="text-center mt-10 text-xl text-red-500">Data not found!</div>;
  }

  const {
    image,
    title,
    developer,
    rating,
    downloads,
    reviews,
    description,
  } = book;
 
   const handkeAddToWishList = () => {
    const existingngList = JSON.parse(localStorage.getItem('readList'))
    let updatedList = []
    if(existingngList) {
      const isDuplicate = existingngList.some(p =>p.id === book.id)
      if(isDuplicate) return alert('Sorry Your Installs')
      updatedList = [...existingngList, book]
    }
    else{
      updatedList.push(book)
    }

    localStorage.setItem('readList',JSON.stringify(updatedList))
  } 

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6">
   
      <div className="flex gap-6">
        <img src={image} alt={title} className="w-40 h-40 rounded-xl" />
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-gray-500 mb-2">Developed by {developer}</p>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-gray-600 flex items-center gap-1">
              <FaDownload /> {downloads}M+
            </span>
            <span className="text-yellow-500 flex items-center gap-1">
              <FaStar /> {rating}
            </span>
            <span className="text-gray-500">{reviews} reviews</span>
          </div>

          <button onClick={handkeAddToWishList} className="mt-4 px-5 py-2 bg-green-600 
          text-white rounded-lg hover:bg-green-700">
            Install Now
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Ratings</h2>
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-600">
            Users love this app! Rated {rating} stars with over {reviews} reviews.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
