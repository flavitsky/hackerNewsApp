import {Stories, StoriesTypes} from '../../../types/stories.d'


export const fetchTopStories = () => ({
    type: StoriesTypes.TOP_STORIES_FETCH
})

export const setTopStoriesIDs = (IDs: Stories.TopStories) => ({
    type: StoriesTypes.TOP_STORIES_SET,
    IDs
})

export const setStories = (stories: Stories.Story[]) => ({
    type: StoriesTypes.STORIES_SET,
    stories
})

export const storiesFetchFailure = (error: string) => ({
    type: StoriesTypes.STORIES_FETCH_FAILURE,
    error
})

export const storiesFetchSuccess = () => ({
    type: StoriesTypes.STORIES_FETCH_SUCCESS
})
