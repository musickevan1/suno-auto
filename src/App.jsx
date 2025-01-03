import React from 'react'
    import { Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import SongGeneration from './pages/SongGeneration'
    import ContentManagement from './pages/ContentManagement'
    import UploadManagement from './pages/UploadManagement'
    import Analytics from './pages/Analytics'
    import Settings from './pages/Settings'
    import Sidebar from './components/Sidebar'
    import './App.css'

    function App() {
      return (
        <div className="app">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/generate" element={<SongGeneration />} />
              <Route path="/content" element={<ContentManagement />} />
              <Route path="/upload" element={<UploadManagement />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      )
    }

    export default App
