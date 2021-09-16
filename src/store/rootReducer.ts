import {combineReducers} from 'redux'
import stories from '../components/topStories/store/reducers'


const RootReducer = combineReducers({
    stories
})

export default RootReducer
export type RootState = ReturnType<typeof RootReducer>
