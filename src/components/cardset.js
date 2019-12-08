import React from 'react'
//import { Card, Button } from 'react-bootstrap'
//import { Link } from 'gatsby'
import SingleCard from './singlecard'

const cardSet = ({ postData, colSetup }) => {
  return (
    <section className="blog-posts">
      <div className="container">
        <div className="row">
          {postData.map(({ post }) => {
            return <SingleCard key={post.id} post={post} colSet={colSetup} />
          })}
        </div>
      </div>
    </section>
  )
}

export default cardSet
