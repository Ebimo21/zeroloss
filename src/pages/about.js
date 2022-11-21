import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Landing from '../components/Sections/Landing'

const about = () => {
  return (
    <Layout>
        <main>
            <p>Contentful!</p>
            <Link to='/'>Home</Link>
        <Landing/>

        </main>
    </Layout>
  )
}

export default about