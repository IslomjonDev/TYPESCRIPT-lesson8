import React from 'react'
import './Category.scss'
import icon1 from '../../assets/Icon.png'
import icon2 from '../../assets/Icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
const Category = () => {
  return (
    <>
           <div className="category">
             <div className="container">
                <h1>Choose A Catagory</h1>
                <div className="category-cards">
                  <div className="category-card">
                      <img alt="icon" width={0} height={0} src={icon1} />
                      <h2>Business</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                  <div className="category-card">
                      <img alt="icon" width={0} height={0} src={icon2} />
                      <h2>Startup</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                  <div className="category-card">
                      <img alt="icon" width={0} height={0} src={icon3} />
                      <h2>Economy</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                  <div className="category-card">
                      <img alt="icon" width={0} height={0} src={icon4} />
                      <h2>Technology</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                </div>
             </div>
          </div>
    </>
  )
}

export default Category