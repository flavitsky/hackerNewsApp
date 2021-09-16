import {Stories, StoriesAction, StoriesTypes} from '../../../types/stories.d'


const defaultState: Stories.State = {
    storiesIDs: [],
    stories: [],
    isLoading: false,
    error: null
}

export default (state = defaultState, action: StoriesAction) => {
    switch (action.type) {
        case StoriesTypes.TOP_STORIES_FETCH:
            return {
                ...defaultState,
                isLoading: true
            }

        case StoriesTypes.TOP_STORIES_SET:
            return {
                ...state,
                storiesIDs: action.IDs
            }

        case StoriesTypes.STORIES_SET:
            return {
                ...state,
                stories: action.stories
            }

        case StoriesTypes.STORIES_FETCH_FAILURE:
            return {
                ...defaultState,
                error: action.error
            }

        case StoriesTypes.STORIES_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
}
