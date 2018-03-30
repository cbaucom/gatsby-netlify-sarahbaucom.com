import React from 'react'
import Link from "gatsby-link"

const NotFoundPage = () => (
  <div className="container section">
    <h1>PAGE NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
    <br />
    <Link className="button is-primary" to="/">
      Go back to the homepage
    </Link>
  </div>
)

export default NotFoundPage
