import React from 'react'
import { useContext } from 'react'
import GithubContext from '../../contextAPI/gitHub/GithubContext'

function Repos({repo}) {
   const {loading} = useContext(GithubContext)
  return (
      <>
      {!loading && (
          <div>
          {repo.map((singleRepo,index)=> (<div className='stat' key={index}>{singleRepo.name}</div>))}
      </div>
      )}
      </>
  )
}

export default Repos