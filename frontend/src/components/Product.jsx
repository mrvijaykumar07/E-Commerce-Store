import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrency } from '../utils/addCurrency';
import { addToCart } from '../slices/cartSlice';
import Rating from './Rating';

const Product = ({ product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };
console.log(product);
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 transition-transform transform hover:scale-105 w-64 h-[380px] flex flex-col justify-between text-center">
      <Link to={`/product/${product._id}`} className="no-underline text-gray-800 hover:text-blue-500">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-contain p-2 rounded-lg"
        />
        <div className="flex flex-col justify-between flex-grow mt-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <div className="text-gray-600 text-sm flex items-center justify-center space-x-2">
            <Rating value={Number(product.rating)} />
            <span>({product.numReviews} reviews)</span>
          </div>
          <p className="text-xl font-bold text-green-600">{addCurrency(product.price)}</p>
        </div>
      </Link>
      <button
        type="button"
        disabled={product.countInStock === 0}
        onClick={addToCartHandler}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
