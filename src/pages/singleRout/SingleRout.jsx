import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailProductQuery } from '../../context/api/ProductsApi'
import Header from '../../components/header/Header'
import './SingleRout.scss'
const SingleRout = () => {
    let {id} = useParams()
    let {data , isLoading} = useGetDetailProductQuery(id)
    console.log();
  return (
    <>
    <div className="single">
        <div className="container">
            <h1>{data?.data?.title}</h1>
            <p>{data?.data?.description}</p>
            <img src={data?.data?.urls[0]} alt="" />
        </div>
    </div>
    </>
  )
}

export default SingleRout