import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { showValidationMessage } from './../../node_modules/sweetalert2/src/instanceMethods/validation-message';
const Products = () => {

    const [products, setProducts] = useState([])
    const [categoris, setCategoris] = useState([])

    const getProducts = () => {
        fetch('http://localhost:3000/p')
            .then(res => res.json())
            .then(json => setProducts(json))
    }
    const getCategoris = () => {
        fetch(`https://fakestoreapi.com/products/categories`)
            .then(res => res.json())
            .then(json => setCategoris(json))
    }

    const getInCategory = (e) => {
        fetch(`https://fakestoreapi.com/products/category/${e}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    const deletePro = (id) => {
        Swal.fire({
            title: `product ${id} will be deleted`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:3000/p/${id}`, {
                    method: "DELETE",
                    isConfirmed: true
                }).then(res => res.json())
            } getProducts();
        });
       
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <h1> our products</h1>
            <Link to="/products/add" className='btn btn-success'>Add</Link>
            <table className="table table-striped mt-3">
                <thead>
                    <tr className='text-center'>
                        <th>id</th>
                        <th>title</th>
                        <th>Price</th>
                        <th>operations</th>
                    </tr>
                </thead>
                <tbody>{products.map((e) => {
                    return (
                        <tr className=' ' key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td className='bg-whit'> $ {e.price}</td>
                            <td>
                                <button
                                    className='btn btn-danger   m-2'
                                    onClick={() => deletePro(e.id)}
                                >delete</button>
                                <button className='btn btn-secondary  m-2'>edit</button>
                                <Link to={`/products/${e.id}`} className='btn btn-primary   m-2'>view</Link>

                            </td>
                        </tr>
                    )
                })}

                </tbody>

            </table>
        </>)

}

export default Products
