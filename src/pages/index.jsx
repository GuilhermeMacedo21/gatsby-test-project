import React, { useEffect, useState } from "react"
import Layout from "../Layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import '../styles/index.css'

const IndexPage = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/products/')
    .then(response => response.json())
    .then(response => setData(response));   
  },[])
  if (!data) <div>Loading...</div>
  return(
    <Layout>
      <Seo title="Home" />
      <h1>Loja de teste</h1>
      <img width={'1200px'} src="https://wx.mlcdn.com.br/site/desk/banners/banner_empresas.png" alt="Imagem Banner"/>
      <div className="slider-product">
        <Link className='link' to="/product/sofa">
          <div className="product">
            <img src={data[0]?.imageUrl} alt={data[0]?.name}></img>
            <p>Sofá</p>
            <h4>R${data[0]?.price}</h4>
          </div>
        </Link>
        <Link className='link' to="/product/guarda-roupa">
          <div className="product">
            <img src={data[1]?.imageUrl} alt={data[1]?.name}></img>
            <p>Guarda-Roupa</p>
            <h4>R${data[1]?.price}</h4>
          </div>
        </Link>
        <Link className='link' to="/product/celular-1">
          <div className="product">
            <img src={data[2]?.imageUrl} alt={data[2]?.name}></img>
            <p>Celular</p>
            <h4>R${data[2]?.price}</h4>
          </div>
        </Link>
        <Link className='link' to="/product/cadeira">
          <div className="product">
            <img src={data[3]?.imageUrl} alt={data[3]?.name}></img>
            <p>Cadeira</p>
            <h4>R${data[3]?.price}</h4>
          </div>
        </Link>
        <Link className='link' to="/product/celular-2">
          <div className="product">
            <img src={data[4]?.imageUrl} alt={data[4]?.name}></img>
            <p>Celular 2</p>
            <h4>R${data[4]?.price}</h4>
          </div>
        </Link>
        <Link className='link' to="/product/tabua">
          <div className="product">
            <img src={data[5]?.imageUrl} alt={data[5]?.name}></img>
            <p>Tábua</p>
            <h4>R${data[5]?.price}</h4>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
