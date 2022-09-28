import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const AddProduct = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    let navigate =useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3000/p`, {
            title: title,
            descibtion: desc,
            price: price
        })
        navigate('/products')
    }
    return (
        <div>
            <h1>add products</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" className="form-control"
                        id="title" aria-describedby="emailHelp"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">product desception</label>
                    <input type="text" className="form-control"
                        id="desc" aria-describedby="emailHelp"
                        onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">price</label>
                    <input type="number" className="form-control"
                        id="price" aria-describedby="emailHelp"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add product</button>
            </form>
        </div>
    )
}

export default AddProduct
