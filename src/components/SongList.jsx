import { useState, useEffect } from "react"

const SongList = ({songList}) => {
  
  
  return (
    <div className="song-list-container">
        <div className="song-list-content">
            {songList.map((song) => {
                return (
                    <div className="song-card">
                        <div className="album-placeholder">
                            <img src={song.album} className="song-image"/>
                        </div>
                        <div className="song-info">
                            <div className="song-name-container"><span>{song.song_name}</span></div>
                            <p>{song.artist}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="swiper-pagination"></div>
    </div>
  )
}

export default SongList