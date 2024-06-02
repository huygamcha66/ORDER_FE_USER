// src/FileUpload.js

import React, { useState } from 'react'
import axios from 'axios'

const ConverTxt = () => {
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')

  const onFileChange = (e) => {
    setFile(e.target.files[0])
    setMessage('')
  }

  const onFileUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post('http://tatcadichvu.com/tuetc/uploadFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setMessage(response.data)
    } catch (error) {
      setMessage('Error uploading file')
    }
  }

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      {message && (
        alert('Đã upload file thành công')
      )}
    </div>
  )
}

export default ConverTxt
