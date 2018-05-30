import React from 'react'
import axios from 'axios'
import key from './key.js'
import './gifs.css'

export default class Gif extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs : []
    }
    this.getPhotos = this.getPhotos.bind(this)
  }

  getPhotos() {
    for (let i = 0; i < 6; i++) {
      axios.get(key.key)
      .then(res => {
        this.setState((prev) => {
          prev.gifs.push(res.data.data.image_url)
          return prev
        })
      })
      .catch(err => console.log(err))
    }
  }

  componentDidMount() {
    this.getPhotos()
  }

  render() {
    if (this.state.gifs.length === 0) {
      return null;
    }
    return (
      <div> 
        <button onClick={() => window.location.reload()}>New</button>
        <button onClick={() => this.setState({gifs: []})}>Clear</button>
        <ul>
          {this.state.gifs.map((gif, i) => {
            return <li key={i}><img src={gif} alt=""/></li>
          })}
        </ul>
      </div>
    )
  }
}