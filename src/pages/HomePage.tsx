import React from 'react'
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/git/git.api'
import { useState, useEffect, ChangeEvent } from 'react'
import { useDebounce } from '../hooks/debounce';
import RepoItem from '../component/RepoItem';
function HomePage() {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });
  const [dropDown, setDropDown] = useState(false);
  const [fetchRepos, { isLoading: areRepoLoading, data: repos }] = useLazyGetUserReposQuery()
  useEffect(() => {
    setDropDown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])
  const handleClick = (username: string) => {
    fetchRepos(username)
    setDropDown(false);
  }
  
  return (
    <div className='flex justify-center pt-10 mx-auto w-screen h-screen p-[10px] '>
      {isError && <p className='text-center text-red-700'> Something went wrong...</p>}
      <div className='relative w-[560px]'>
        <input type="text"
          className='border py-2 px-4 w-full h-[42px] mb-2'
          placeholder='Git to search....'
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        {dropDown &&
           (
            <ul className='list-none overflow-y-scroll absolute top-[42px] right-0 left-0 max-h-[200px] shadow-md bg-red'>
            {isLoading && <p className='text-center'>Loading...</p>}
            {data?.map(user => (
              <li key={user.id}
                onClick={() => handleClick(user.login)}
                className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
              >{user.login}</li>
            ))}
          </ul>
           )
        }
        <div className='container'>
          {areRepoLoading && <p className='text-center'>Repos are loading...</p>}
          {repos?.map(repo => <RepoItem repo={repo} key={repo.id} />)}
        </div>
      </div>

    </div>
  )
}

export default HomePage