import React from 'react';
import ExImage from './car.jpeg'
import QuantitySelector from './QuantitySelector';

function Cards() {
    
    const products = [
        { name: "Product 1", price: 59 },
        { name: "Product 2", price: 69 },
        { name: "Product 3", price: 79 }
    ];


    return (
        <>
            {products.map((product, index) => (
                <div key={index} className="rounded-lg bg-white shadow-md overflow-hidden">
                    <img
                        src= {ExImage}
                        alt={product.name}
                        className="w-full h-40 object-cover"
                    />
                    <div className="card-desc mt-2 p-4">
                        <h1 className="text-2xl font-semibold">{product.name}</h1>
                        <h1 className="text-xl font-bold text-green-600">${product.price}</h1>
                        <QuantitySelector />
                        <button className='bg-blue-500 rounded-full py-1 px-4 text-white mt-3'>Add to Cart</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Cards;