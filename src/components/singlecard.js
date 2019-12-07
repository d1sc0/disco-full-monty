import React from 'react'
import { Card } from 'react-bootstrap'
//import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const singleCard = ({ post }) => {
  const postImage = post.images[0].fluid
  return (
    <>
      {/* start of card */}
      <div className="col-md-4 card-group">
        <Card className="card mb-4 box-shadow">
          <Image
            fluid={postImage}
            objectFit="cover"
            className="mb-0 img-fluid card-img-top"
            alt=""
          />
          <Card.Body>
            <Card.Title>
              <Link to={`/blog/${post.slug}`}>{post.postTitle}</Link>
              <small className="post-date text-muted float-right">
                {post.postDate}
              </small>
            </Card.Title>
            <Card.Text className="postexcerpt">
              {post.postExcerpt.postExcerpt}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/blog/${post.slug}`} className="float-right">
              Read more...
            </Link>
          </Card.Footer>
        </Card>
      </div>
      {/* end of card */}
    </>
  )
}

export default singleCard
