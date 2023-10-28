import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IRepos, IUsers, ServerUsers } from '../../models/model'
export const gitApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build =>({
        searchUsers: build.query<IUsers[], string>({
            query: (search: string)=> ({
                url: `search/users`,
                params:{
                    q: search,
                    per_page: 10
                }
            }),
           transformResponse: (response: ServerUsers<IUsers>) => response.items
        }),
        getUserRepos: build.query<IRepos[], string>({
            query: (username: string)=>({
                url: `users/${username}/repos`
            })
        })
    })

})

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = gitApi

