import React, { useState } from 'react'
import './CreateProduct.scss'
import { useGetInputValue } from '../../hooks/GetInputValue'
import { useCreateProductMutation } from '../../context/api/ProductsApi'
import { IoCloudUploadOutline } from "react-icons/io5";
import LocalImages from '../localimages/LocalImages';


const initialState = {
    title : "" ,
    price : "" ,
    oldPrice : "" ,
    category : "" ,
    units : "" ,
    description : "" ,
    info : ""
}

const CreateProduct = () => {

    const {formData , handleChange , setFormData} = useGetInputValue(initialState)
    const [file , setFile] = useState("")

    const [createProduct , {isLoading}] = useCreateProductMutation()

    const handleCreateProduct = e => {
        e.preventDefault()
        
        let form = new FormData()
        form.append("title" , formData.title)
        form.append("price" , formData.price)
        form.append("oldPrice" , formData.oldPrice)
        form.append("category" , formData.category)
        form.append("units" , formData.units)
        form.append("description" , formData.description)
        form.append("info" , JSON.stringify({}))
        
        Array.from(file).forEach(img => {
            form.append("files" , img , img.name)
    })
        
        createProduct(form)
        setFormData(initialState)
        setFile("")
    }

  return (
    <>
    <div className="create__product">
       <form onSubmit={handleCreateProduct} action="">
          <h2>Create Product</h2>
          <div className="df">
            <input value={formData.title} onChange={handleChange} type="text" name='title' placeholder='product title' />
            <input value={formData.category} onChange={handleChange}  type="text" name='category' placeholder='product category' />
          </div>
          <div className="df">
            <input value={formData.oldPrice} onChange={handleChange}  type="number" name='oldPrice' placeholder='product oldPrice' />
            <input value={formData.price} onChange={handleChange}  type="number" name='price' placeholder='product price' />
          </div>
          <textarea value={formData.description} onChange={handleChange}  type="text" name='description' placeholder='product disc' />
          <textarea value={formData.info} onChange={handleChange}  type="text" name='info' placeholder='product info'/>
          <div className="df">
              <input value={formData.units} onChange={handleChange} t type="text" name='units' placeholder='product units' />
          </div>
              <div id='file' className='files'>
                  <span>
                    <p>upload image </p>
                    <IoCloudUploadOutline />
                  </span>
                 <input id='file' onChange={ e => setFile(e.target.files)} type="file" multiple accept='images/*' />
                  <LocalImages file={file} />
              </div>
          <button>Create</button>
       </form>
    </div>
    </>
  )
}

export default CreateProduct