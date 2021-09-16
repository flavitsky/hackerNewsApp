import {fork} from 'redux-saga/effects'
import stories from '../components/topStories/store/sagas'


export default function* rootSaga() {
    yield fork(stories)
}
