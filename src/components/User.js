import React from 'react'
import { useHistory } from 'react-router-dom'
import Details from './Details'
import ProfileData from './ProfileData'

const User = ({
  location: {
    state: { data },
  },
}) => {
  const history = useHistory()
  const {
    avatar_url,
    login,
    html_url,
    bio,
    followers,
    following,
    location,
    blog,
    twitter_username,
  } = data
  const profile = [
    !!followers && {
      name: 'followers',
      href: `${html_url}?tab=followers`,
      data: followers,
    },
    !!following && {
      name: 'following',
      href: `${html_url}?tab=following`,
      data: following,
    },
  ]

  const details = [
    !!location && {
      name: location,
      data: `https://www.google.com/maps/place/${location}`,
    },
    !!blog && { name: blog, data: blog },
    !!twitter_username && {
      name: twitter_username,
      data: `https://twitter.com/${twitter_username}`,
    },
  ]

  return (
    <>
      <div className="container vh-100 d-flex justify-content-center flex-column">
        <div className="row mb-5">
          <div className="col">
            <button
              onClick={() => history.goBack()}
              className="btn btn-secondary"
            >
              {'< Back'}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href={html_url} target="_blank" rel="noreferrer">
              <img
                className="rounded-circle mw-100"
                src={avatar_url}
                alt={login}
              />
            </a>
          </div>
          <div className="col-md-8">
            <p>
              <a href={html_url} target="_blank" rel="noreferrer">
                {login}
              </a>
            </p>
            {bio && <p>{bio}</p>}
            <ProfileData profile={profile} />
            <Details details={details} />
          </div>
        </div>
      </div>
    </>
  )
}

export default User
