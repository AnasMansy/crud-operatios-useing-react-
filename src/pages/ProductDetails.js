import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Product from '../components/Product';
import '../App.css'
const ProductDetails = () => {
    const param = useParams();
    const [product, setProducts] = useState({})
console.log(param.productId)
    useEffect(() => {
        fetch(`http://localhost:3000/p/${param.productId}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])


    return (
        <div>
            <h1>details for {product.title}</h1>
            <Product product={product} showBtn={false} />
        </div>
    )
}

export default ProductDetails
