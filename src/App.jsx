import { useState } from 'react'
import styles from './App.module.css'
import './normalize.css'

import NavBar from './components/NavBar'
import Billboard from './components/Billboard'
import Slider from './components/Slider'
import Footer from './components/Footer'

function App() {

  /**
   * include yt api for its playlists
   * from the api we need (to): 
   *  - tally number of playlists
   *    categorize the playlists (variety, reality, music, etc.)
   *    these will be put into their own slider/page
   *    (gose -> variety slider, svt club -> variety slider, inside svt -> reality slider, ofd -> reality slider, etc.)
   *    loop over an array of the playlist titles for a single show
   *    
   *  - get episodes for shows 
   *    for each episode: link, thumbnail, date, length
   * 
   * disclaimer: not every show is on youtube, 
   * and those hidden show links will need to be encrypted
  **/

  return (
    <div>
      <NavBar />
      <div className={styles.mainArea}>
        <Billboard />
        <Slider />
      </div>
      <Footer />
    </div>
  )
}

export default App
