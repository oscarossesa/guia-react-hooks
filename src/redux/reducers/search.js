import { get } from 'lodash'
import {
   SEARCH_MOVIE_START,
   SEARCH_MOVIE_ERROR,
   SEARCH_MOVIE_COMPLETE,
   SEARCH_MOVIE_BY_ID_START,
   SEARCH_MOVIE_BY_ID_ERROR,
   SEARCH_MOVIE_BY_ID_COMPLETE
} from '../../consts/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
   switch (action.type) {
      case SEARCH_MOVIE_START:
         return { ...state, isLoading: true }
         break
      case SEARCH_MOVIE_ERROR:
         console.log(action)
         return { ...state, isLoading: false, movieResults: null }
         break
      case SEARCH_MOVIE_COMPLETE:
         console.log('action', action)
         return { ...state, isLoading: false, movieResults: action.results.data }
         break
      case SEARCH_MOVIE_BY_ID_START:
         return { ...state, isLoading: true, movieResult: null }
         break
      case SEARCH_MOVIE_BY_ID_ERROR:
         console.log(action)
         return { ...state, isLoading: false, movieResults: null }
         break
      case SEARCH_MOVIE_BY_ID_COMPLETE:
         console.log('action', action)
         return { ...state, isLoading: false, movieResult: action.movie.data }
         break
      default:
         return { ...state }
   }
}