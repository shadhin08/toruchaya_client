// import React from 'react';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import './Product.css';

const Product = (props) => {
    // console.log(props.plant);
    const {name, categorie, underCategorie, size, price, image, quantity}=props.plant.plant;
    
    const quantityNum=Number(quantity);
    let totalQuantity=[];
    for(let i=2;i<=quantityNum;++i)
    {
        totalQuantity=[...totalQuantity, i];
    }

    // console.log(totalQuantity);
    return (
        <div className='single-product'>
            <Card sx={{ maxWidth: 290 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {categorie} {underCategorie[0]}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        $ {Number(price).toFixed(2)}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <div className='add-cart-section '>
                    <div className="col-md-3 cart-item-quantity" >
                        <select id="indoor1">
                            <option defaultValue>1</option>
                            {
                                totalQuantity.map(number=> <option>{number}</option>)
                            }
                        </select>
                    </div>
                    <button className='add-cart-button'>Add to cart</button>
                </div>
                </CardActions>
            </Card>
        </div>
    );
};

export default Product;