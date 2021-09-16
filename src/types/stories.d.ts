declare namespace Stories {
    type TopStories = number[]

    type Story = {
        by: string
        descendants: number
        id: number
        kids: number[]
        score: number
        time: number
        title: string
        type: string
        url: string
        karma: number
    }

    type User = {
        created: number
        id: string
        karma: number
        submitted: number[]
    }

    interface State {
        storiesIDs: TopStories | []
        stories: Story[] | []
        isLoading: boolean
        error: string | null
    }
}

export enum StoriesTypes {
    TOP_STORIES_FETCH = 'stories/TOP_STORIES_FETCH',
    STORIES_FETCH = 'stories/STORIES_FETCH',
    STORIES_SET = 'stories/STORIES_SET',
    TOP_STORIES_SET = 'stories/TOP_STORIES_SET',
    USERS_FETCH = 'stories/USERS_FETCH',
    STORIES_FETCH_FAILURE = 'stories/FETCH_FAILURE',
    STORIES_FETCH_SUCCESS = 'stories/FETCH_SUCCESS'
}

interface TopStoriesFetchAction {
    type: StoriesTypes.TOP_STORIES_FETCH
}

interface TopStoriesSetAction {
    IDs: Stories.TopStories
    type: StoriesTypes.TOP_STORIES_SET
}

interface StoriesSetAction {
    type: StoriesTypes.STORIES_SET
    stories: Stories.Story[]
}

interface StoriesFetchFailureAction {
    type: StoriesTypes.STORIES_FETCH_FAILURE
    error: string
}

interface StoriesFetchSuccessAction {
    type: StoriesTypes.STORIES_FETCH_SUCCESS
}

type StoriesAction =
    | TopStoriesFetchAction
    | TopStoriesSetAction
    | StoriesSetAction
    | StoriesFetchFailureAction
    | StoriesFetchSuccessAction
