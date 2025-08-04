import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';
import PropTypes, { string } from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'us',
    pageSize : 8,
    category : 'sports'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Newsly`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15dc7c9b8ec64b02a21523f3d3900572&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,
       totalRes: parsedData.totalResults,
      loading : false })
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15dc7c9b8ec64b02a21523f3d3900572&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles,
    //    totalRes: parsedData.totalResults,
    //   loading : false })
    this.updateNews();
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15dc7c9b8ec64b02a21523f3d3900572&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading : false
    // })
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalRes / this.props.pageSize))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15dc7c9b8ec64b02a21523f3d3900572&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading : true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading : false
    //   })
    // }
     this.setState({page: this.state.page + 1});
    this.updateNews();
  }
  render() {
    return (
      <>
        <div className='container my-3'>
          <h2 className='text-center' style={{margin:'30px'}}>Newsly - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          <div className="container d-flex justify-content-between" style={{ cursor: this.state.page <= 1 || this.state.page + 1 > Math.ceil(this.state.totalRes / this.props.pageSize) ? 'not-allowed' : 'pointer' }} >
            <button disabled={this.state.page <= 1} type='button' className='btn btn-secondary' onClick={this.handlePrevClick} >&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalRes / this.props.pageSize)} type='button' className='btn btn-secondary' onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}

export default News
