import React, { useEffect, useState } from 'react'
import './Home.scss'
import { useGetProductsQuery } from '../../context/api/ProductsApi';
import Banner from '../../components/banner/Banner';
import productimage from '../../assets/product.png'
import Category from '../../components/category/Category';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';


const Home = () => {
    const {data } = useGetProductsQuery({limit:1050} )
    const [products , setProducts] = useState(null)
    
    useEffect(() => {
        data ? setProducts(data.data.products) : data
    } , [data])
      
    let product = products?.map( pro => (
        <div className='card' key={pro.id}>
            <div className='img'>
                {
                    pro.urls[0]?
                    <img width={200} src={pro?.urls[0] } alt="" />
                    :
                    <img width={200} src={productimage} alt="" />
                }
            </div>
            <Link to={`/products/${pro.id}`}>
                 <h3>{pro?.title}</h3>
            </Link>
            <p className='p'>{pro?.oldPrice}$</p>
            <p>{pro?.price} $</p>
            
        </div>
    ))
     
  return (
    <>
    <Banner/>
    <div className="home">
        <div className="container"> 
            <h2>Products</h2>
            <div className="producItems">
              {product}
            </div>
        </div>
    </div>
    <Category/>
    </>
  )
}

export default Home