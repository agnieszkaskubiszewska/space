import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <p className='footer'>
        <a href="https://www.linkedin.com/in/agnieszka-skubiszewska-17aaa4106/">LinkedIn</a>
        </p>
        <p className='footer'>
        <a href="https://open.spotify.com/playlist/5NbleROaHyKOZDwJEPm7f5?si=fefe370b536842f0">Space Playlist</a>
        </p>
        <p className='footer'>
        <a href="https://www.google.com">Contact</a>
        </p>
      </div>
    )
  }
}
