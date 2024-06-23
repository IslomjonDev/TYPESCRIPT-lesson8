import React, { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../../context/api/ProductsApi';

const Home = () => {
    const {data} = useGetProductsQuery()
    const [products , setProducts] = useState(null)
    
    useEffect(() => {
        data ? setProducts(data.data.products) : data
    } , [data])
      
    let product = products?.map( pro => (
        <div key={pro.key}>
            <img width={200} src={pro?.urls[0]} alt="" />
            <h2>{pro?.title}</h2>
        </div>
    ))
     
  return (
    <div>
        <h2>Home</h2>
        {product}
    </div>
  )
}

export default Home