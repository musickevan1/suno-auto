import React, { useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import axios from 'axios'
    import './SongGeneration.css'

    function SongGeneration() {
      const [prompt, setPrompt] = useState('')
      const [status, setStatus] = useState('')
      const navigate = useNavigate()

      const handleGenerate = async () => {
        if (!prompt.trim()) {
          setStatus('Please enter a valid prompt.')
          return
        }

        setStatus('Generating song...')

        try {
          // Replace with your actual Suno GCUI API endpoint and API key
          const response = await axios.post(
            'https://suno.gcui.ai/generate',
            { prompt },
            {
              headers: {
                'Authorization': `Bearer YOUR_SUNO_GCUI_API_KEY`,
                'Content-Type': 'application/json'
              }
            }
          )

          if (response.data && response.data.song) {
            setStatus('Song generated successfully!')
            // Save the generated song
            const generatedSongs = JSON.parse(localStorage.getItem('generatedSongs') || '[]')
            generatedSongs.unshift({
              id: Date.now(),
              title: prompt,
              date: new Date().toLocaleDateString(),
              status: 'Generated',
              audioUrl: response.data.song.audioUrl,
              videoUrl: response.data.song.videoUrl,
              thumbnailUrl: response.data.song.thumbnailUrl
            })
            localStorage.setItem('generatedSongs', JSON.stringify(generatedSongs))
            // Redirect to content management
            navigate('/content')
          } else {
            setStatus('Failed to generate song. Please try again.')
          }
        } catch (error) {
          console.error('Error generating song:', error)
          setStatus('Failed to generate song. Please try again.')
        }
      }

      return (
        <div className="song-generation">
          <h1>Generate New Song</h1>
          <div className="form-group">
            <label htmlFor="prompt">Song Prompt</label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter song details (e.g., genre, mood, tempo)"
            />
          </div>
          <button onClick={handleGenerate}>Generate Song</button>
          {status && <p className="status">{status}</p>}
        </div>
      )
    }

    export default SongGeneration
