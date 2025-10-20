import React from 'react';
import { Link } from 'react-router-dom'; 

const ButtomLink = () => {
  return (
    <div>
      <Link to="/apps">
        <button className="btn btn-outline btn-secondary text-blue-500 bg-gray-300">
          Explore Apps
        </button>
      </Link>
    </div>
  );
};

export default ButtomLink;