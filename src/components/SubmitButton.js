import React from 'react'

const SubmitButton = ({ isLoading }) => {
  if (isLoading) {
    return (
      <button
        class="btn btn-primary d-flex align-items-center"
        type="button"
        disabled
      >
        <span
          class="spinner-grow spinner-grow-sm mr-3"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    )
  }

  return (
    <button className="btn btn-primary" type="submit">
      Submit
    </button>
  )
}

export default SubmitButton
