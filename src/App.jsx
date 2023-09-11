import { useState } from 'react'
import styles from './App.module.css'
import './normalize.css'

import NavBar from './components/NavBar'
import Billboard from './components/Billboard'
import Slider from './components/Slider'
import Footer from './components/Footer'

const playlists = [
  {
    title: 'Going Seventeen',
    id: `PLk_UmMfvZDx21Z9eEQ9DcIlUfZp1uwEup`
  },
  {
    title: 'SVT Record',
    id: `PLk_UmMfvZDx2NxKtr1WOs3w4f2GoTpful`
  },
  {
    title: 'INSIDE SEVENTEEN',
    id: `PLk_UmMfvZDx0jZNccOaFJbMqKwvwwUfAN`
  },
]

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
        {playlists.map(playlist => <Slider key={playlist.title} title={playlist.title} id={playlist.id} /> )
          }
      </div>
      <Footer />
    </div>
  )
}

export default App
