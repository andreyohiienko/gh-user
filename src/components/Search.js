import Axios from 'axios'
import React, { useState } from 'react'
import SubmitButton from './SubmitButton'

const Search = ({ history }) => {
  const [username, setUsername] = useState('')
  const [err, setErr] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { data } = await Axios.get(
        `https://api.github.com/users/${username}`,
      )
      history.push({ pathname: '/user', state: { data } })
    } catch (error) {
      setErr(error)
      setIsLoading(false)
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
      <div className="d-flex align-items-start justify-content-center">
        <div className="d-flex flex-column w-75 mr-5">
          <input
            disabled={isLoading}
            type="text"
            className="w-100 form-control"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {renderError()}
        </div>
        <SubmitButton {...{ isLoading }} />
      </div>
    </form>
  )
}

export default Search
