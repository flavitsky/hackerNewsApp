import {RootState} from '../../../store/rootReducer'


export const dataSelector = (state: RootState) => state.stories
export const storiesSelector = (state: RootState) => state.stories.stories
export const storiesIDSelector = (state: RootState) => state.stories.storiesIDs
