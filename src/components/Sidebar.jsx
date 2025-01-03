import React from 'react'
    import { Link } from 'react-router-dom'
    import { FaHome, FaMusic, FaUpload, FaChartLine, FaCog } from 'react-icons/fa'
    import './Sidebar.css'

    function Sidebar() {
      return (
        <nav className="sidebar">
          <div className="logo">AutoSong</div>
          <ul>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/generate">
                <FaMusic /> Generate Song
              </Link>
            </li>
            <li>
              <Link to="/content">
                <FaMusic /> Content
              </Link>
            </li>
            <li>
              <Link to="/upload">
                <FaUpload /> Upload
              </Link>
            </li>
            <li>
              <Link to="/analytics">
                <FaChartLine /> Analytics
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <FaCog /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      )
    }

    export default Sidebar
