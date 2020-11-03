import React from 'react'

const Details = ({ details }) => {
  const renderItem = (item) => {
    if (item) {
      const { name, data } = item
      return (
        <li key={name}>
          <a href={data} target="_blank" rel="noreferrer">
            {name}
          </a>
        </li>
      )
    }
    return ''
  }

  const isNotEmpty = details.every((currVal) => currVal === false)

  if (!isNotEmpty) {
    return (
      <ul className="list-unstyled">
        {details.map((item) => renderItem(item))}
      </ul>
    )
  }

  return ''
}

export default Details
