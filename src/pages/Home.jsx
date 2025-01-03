import React from 'react'
    import { Link } from 'react-router-dom'
    import './Home.css'

    function Home() {
      return (
        <div className="home">
          <h1>Welcome to AutoSong Dashboard</h1>
          <div className="quick-actions">
            <Link to="/generate" className="action-card">
              <h2>Generate New Song</h2>
              <p>Create a new song with AI</p>
            </Link>
            <Link to="/content" className="action-card">
              <h2>View Content</h2>
              <p>Manage your generated songs</p>
            </Link>
            <Link to="/upload" className="action-card">
              <h2>Upload to Platforms</h2>
              <p>Share your music with the world</p>
            </Link>
          </div>
        </div>
      )
    }

    export default Home
