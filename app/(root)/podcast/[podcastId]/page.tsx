import React from 'react'

const PodcastDetail = ({params}:{params:{podcastId: string}}) => {
  return (
    <p className='text-white-1'>
      PodcastDetail for { params.podcastId}
    </p>
  )
}

export default PodcastDetail
