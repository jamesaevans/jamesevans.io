import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>I'm James :)</h1>
    <p>Welcome to my site.</p>
    <p>Here's what lives here.</p>

    <ul>
    	<li><Link to="/page-2/">About me</Link></li>
    	<li><Link to="/page-2/">Projects</Link></li>
    	<li><Link to="/page-2/">Books</Link></li>
    	<li><Link to="/page-2/">Writing</Link></li>
    	<li><Link to="/page-2/">Contact</Link></li>
    </ul>

  </div>
)

export default IndexPage
