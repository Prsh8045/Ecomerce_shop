import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card,message} from 'antd';

const Informationproduct = ({ addData, productData }) => {
  let { id } = useParams();
  const update = productData.filter((val) => val.id === parseInt(id));
  console.log(update[0].image);

  const [imageData, setimageData] = useState(update[0].image);
  const addToCart = (product) => {
    addData(product); // Call the addData function passed from parent component
    message.success('Product added to cart'); // Show success message
  };
 

  return (
    <>
      {productData
        .filter((curVal) => curVal.id === parseInt(id))
        .map((val) => {
          const {
           
           title,
            price,
            description,
          
          } = val;
         

          return (
            <>
            <Card style={{ width: 100,height:50 }} bodyStyle={{ padding: 0 }}>
              <div className="small-container single-product">
                <div className="row">
                  <div className="col-2 one">
                    <img
                      src={imageData}
                      alt="ghcgh"
                      className="main-img"
                      width="100%"
                      onChange={(e) => setimageData(e.target.src)}
                    />

                   
                      </div>
                    </div>
                  </div>

                  
                  <div className="col-2 two">
                    <h1>{title}</h1>
                    <h3>{price}</h3>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <h3>product details</h3>
                    <p>{description}</p>

                    <button className="btn" onClick={() => addToCart(val)}>
                      Add to cart
                    </button>
                   
                    
                  </div>
  </Card>

            </>
          );
        })}
    </>
  );
};

export default Informationproduct;
