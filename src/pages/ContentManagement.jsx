import React, { useState, useEffect } from 'react'
    import './ContentManagement.css'

    function ContentManagement() {
      const [songs, setSongs] = useState([])

      // Load songs from localStorage on component mount
      useEffect(() => {
        const savedSongs = JSON.parse(localStorage.getItem('generatedSongs') || '[]')
        setSongs(savedSongs)
      }, [])

      return (
        <div className="content-management">
          <h1>Content Management</h1>
          <div className="songs-list">
            {songs.map(song => (
              <div key={song.id} className="song-item">
                <h3>{song.title}</h3>
                <p>Date: {song.date}</p>
                <p>Status: {song.status}</p>
                {song.audioUrl && (
                  <audio controls>
                    <source src={song.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
                {song.videoUrl && (
                  <video controls width="250">
                    <source src={song.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {song.thumbnailUrl && (
                  <img src={song.thumbnailUrl} alt="Thumbnail" width="150" />
                )}
              </div>
            ))}
          </div>
        </div>
      )
    }

    export default ContentManagement
