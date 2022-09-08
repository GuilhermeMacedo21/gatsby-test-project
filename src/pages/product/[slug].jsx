import React, { useEffect, useState } from "react";
import Layout from "../../Layout"

const Product = ({slug}) => {
    const [product,setProduct] = useState()
    useEffect(()=>{
        fetch(`http://localhost:3000/products?slug=${slug}`)
        .then(response => response.json())
        .then(response => setProduct(response));
    },[])

    return(
        <Layout>
            <h1>Test - Product Page</h1>
            {product !== undefined &&  
                <div style={{
                    display:'flex'
                }}>
                    <img style={{height:'250px',alignSelf:'center'}} src={product[0]?.imageUrl} alt='test'/>
                    <div style={{
                        margin:'30px'
                    }}>
                        <p>{product[0]?.name}</p>
                        <h4>R${product[0]?.price}</h4>
                        <p>{product[0]?.description}</p>
                    </div>
                </div>
            }
            
        </Layout>
    )
}

export default Product