import * as React from "react"
import { Link } from "gatsby"

import Layout from "../Layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Apenas uma página de teste</h1>
    <Link to="/">Voltar</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
