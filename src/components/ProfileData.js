import React from 'react'

const ProfileData = ({ profile }) => {
  const renderItem = (item) => {
    if (item) {
      const { name, href, data } = item
      return (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mr-3"
        >
          {data} {name}
        </a>
      )
    }

    return ''
  }

  const isNotEmpty = profile.every((currVal) => currVal === false)

  if (!isNotEmpty) {
    return <p className="d-flex">{profile.map((item) => renderItem(item))}</p>
  }

  return ''
}

export default ProfileData
