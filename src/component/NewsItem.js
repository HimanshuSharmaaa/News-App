import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
        <div className="my-3">
          <div className="card" style={{width: "18rem"}}>
              <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107362589-1705952822195-gettyimages-946573920-img_6073.jpeg?v=1705952864&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
