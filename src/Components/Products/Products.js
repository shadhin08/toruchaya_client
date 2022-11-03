import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

import './Products.css';

const Products = () => {
    const [plants, setPlants]=useState([]);
    useEffect(()=>
    {
        fetch('http://localhost:3000/plants')
        .then(res=>res.json())
        .then(data=>setPlants(data))
    }, [])
    return (
            // <div className="plant-container">
            // {
            //     plants.map(plant=> <Product className="card" plant={plant} key={plant._id} ></Product>)
            // }
            // </div>
            <>
            <h1 className='products-header'>All Plants</h1>
            <div className="plant-container">

                {plants.map(plant => (
                <div
                    key={plant.plant._id}
                ><Product plant={plant} key={plant.plant._id} ></Product> </div>
                ))}
            </div>
            <div className='see-more-button'>
                <button >See more</button>
            </div>
            
            </>
    );
};

export default Products;