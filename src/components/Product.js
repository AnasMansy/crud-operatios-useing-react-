import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Product = ({ product, showBtn }) => {
    return (
        <div className='product'>
            <div className="card "  >
                <img src={product.image} alt="uploading product image" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                    {showBtn ?
                        <button>
                            <Link to={`product/${product.id}`} className="btn btn-primary">details</Link>
                        </button> :
                        <button>
                            <Link href=" " className="btn btn-primary">add to cart</Link>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
