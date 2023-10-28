import React, {useState} from 'react'
import { IRepos } from '../models/model';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

function RepoItem({ repo }: { repo: IRepos }) {
    const { favourites } = useAppSelector(state => state.github);
    const [isFavourite, setIsFavourite] = useState(favourites.includes(repo.html_url))
    const {addFavourites, removeFavourites} = useActions();
    const saveAs = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault()
        addFavourites(repo.html_url)
        setIsFavourite(true)
    }
    const removeAs = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault()
        removeFavourites(repo.html_url)
        setIsFavourite(false)
    }
    
    return (
        <a href={repo.html_url} target='_blank'>
            <div className='border bg-white py-2 px-4 mt-[10px] cursor-pointer hover:bg-blue-100 shadow-md'>
                <h1 className='text-red-900 font-bold'>{repo.name}</h1>
                <span className='text-red-900 flex'><p className='mr-[10px] font-[500]'>watchers:</p>{repo.watchers}</span>
                <span className='text-red-900 flex'><p className='mr-[10px] font-[500]'>forks:</p>{repo.forks}</span>
                <span className='text-red-900'>{repo?.description}</span>
                {!isFavourite && (
                    <button className='rounded-md bg-blue-600 text-white w-[150px] h-[40px] mt-[10px] ml-[10px]' onClick={saveAs}>Save</button>
                )}
                {isFavourite && (
                    <button className='rounded-md bg-pink-900 text-white w-[150px] h-[40px] mt-[10px] ml-[10px]' onClick={removeAs}>Remove</button>
                )}
            </div>
        </a>
    )
}

export default RepoItem