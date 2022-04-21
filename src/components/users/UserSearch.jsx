import React from 'react'
import {useState, useContext} from 'react'
import GithubContext from '../../contextAPI/gitHub/GithubContext'
import AlertContext from '../../contextAPI/Alert/AlertContext'

function UserSearch() {

    const {user,searchUsers, clearUsers} = useContext(GithubContext)
    const {createAlert} = useContext(AlertContext)

    const [text, setText] = useState('')
    const onChangeHandler=(e)=>{
        setText(e.target.value)
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if(text === ''){
          createAlert('PLease Write Something', 'error')
        }else{
                searchUsers(text)
        }
        setText('')
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-md text-black'
                placeholder='Search'
                value={text}
                onChange={onChangeHandler}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-md'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {user.length > 0 && (
        <div>
          <button
            className='btn btn-info btn-md rounded-md'
            onClick={clearUsers}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch