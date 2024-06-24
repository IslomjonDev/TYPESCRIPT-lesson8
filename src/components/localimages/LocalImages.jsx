import React , {memo} from 'react'

const LocalImages = ({file}) => {
  return (
    <>
       {
            Object.values(file)?.map((image , index) => (
                <img key={index} src={URL.createObjectURL(image)}  alt="" />
            ))
       }
    </>
  )
}

export default memo(LocalImages)