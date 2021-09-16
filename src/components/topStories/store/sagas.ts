import {all, call, fork, put, select, takeEvery} from 'redux-saga/effects'
import {getStoryAPI, getTopStoriesAPI, getUserAPI} from '../../../api'
import {setStories, setTopStoriesIDs, storiesFetchFailure, storiesFetchSuccess} from './actions'
import {storiesIDSelector, storiesSelector} from './selectors'
import {AxiosResponse} from 'axios'
import {Stories, StoriesTypes} from '../../../types/stories.d'


export function* fetchTopStoriesSaga() {
    try {
        const {data} = yield call(getTopStoriesAPI)

        const randomIndexes = new Set()
        while (randomIndexes.size < 10) {
            randomIndexes.add(~~(Math.random() * data.length))
        }

        const IDs = [...randomIndexes].map(index => data[index as number])

        yield put(setTopStoriesIDs(IDs))
        yield fork(fetchStorySaga)
    } catch (e) {
        yield put(storiesFetchFailure(e as string))
    }
}

export function* fetchStorySaga() {
    try {
        const storiesIDs: Stories.TopStories = yield select(storiesIDSelector)

        const responseArray: AxiosResponse[] = yield all(storiesIDs.map((id: number) => call(getStoryAPI, id)))
        const stories = responseArray.map(response => response.data)

        yield put(setStories(stories as Stories.Story[]))
        yield fork(fetchUsersSaga)
    } catch (e) {
        yield put(storiesFetchFailure(e as string))
    }
}

export function* fetchUsersSaga() {
    try {
        const stories: Stories.Story[] = yield select(storiesSelector)
        const responseArray: AxiosResponse[] = yield all(stories.map(({by}: { by: string }) => call(getUserAPI, by)))
        const users = responseArray.map(response => response.data)

        const storiesWithUsersKarma: Stories.Story[] = stories.map(
            (story: Stories.Story) => {
                users.map((user: Stories.User) => {
                    if (user.id === story.by) {
                        story.karma = user.karma
                    }
                })
                return story
            }
        )

        const sortedStories = storiesWithUsersKarma.sort((a, b) => a.score - b.score)

        yield put(setStories(sortedStories))
        yield put(storiesFetchSuccess())
    } catch (e) {
        yield put(storiesFetchFailure(e as string))
    }
}

export default function* storiesSagas() {
    yield fork(fetchTopStoriesSaga)

    yield all([
        takeEvery(StoriesTypes.TOP_STORIES_FETCH, fetchTopStoriesSaga),
        takeEvery(StoriesTypes.STORIES_FETCH, fetchStorySaga),
        takeEvery(StoriesTypes.USERS_FETCH, fetchUsersSaga)
    ])
}
