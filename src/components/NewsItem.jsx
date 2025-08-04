import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;  //destructuring
    return (
      <div className='my-3' >
        <Card >
      <Card.Img variant="top" src={imgUrl?imgUrl:"https://images.axios.com/pUdKUoxoK63NN8Ei9VJQlsnWS-8=/1366x768/smart/2025/06/02/205743-1748897863557.jpg"} />
      <Card.Body>
         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' ,zIndex:'1'}}>{source}</span>
        <Card.Title>{title}...</Card.Title>
        <Card.Text>{description}...</Card.Text>
        <small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small>
        <a rel='nonreferrer' href={newsUrl} target='_blank' className='btn btn-sm btn-secondary d-block mt-2'>Read More</a>
      </Card.Body>
    </Card>
      </div>
    )
  }
}

export default NewsItem

