import Axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
  const [username, setUsername] = useState('')
  const [err, setErr] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await Axios.get(
        `https://api.github.com/users/${username}`,
      )
    } catch (error) {
      setErr(error)
      console.log(error)
    }
  }

  const renderError = () => {
    if (err) {
      return (
        <div className="invalid-feedback d-block">
          Please enter existed user name
        </div>
      )
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="container vh-100 d-flex justify-content-center flex-column"
    >
      <h2 className="text-center mb-5">Please enter your github user name</h2>
      <input
        type="text"
        className="w-100 form-control"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {renderError()}
    </form>
  )
}

export default Search
