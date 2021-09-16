import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Story from './components/story'
import Error from './components/error'
import {RefreshControl, SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {fetchTopStories} from './store/actions'
import {dataSelector} from './store/selectors'


const TopStories = () => {
    const dispatch = useDispatch()
    const {stories, isLoading, error} = useSelector(dataSelector)

    const onRefresh = () => {
        dispatch(fetchTopStories())
    }

    return (
        <SafeAreaView>
            <ScrollView
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh}/>}
                style={styles.scrollView}
            >
                {
                    error
                        ? <Error/>
                        : !isLoading && stories.map(story => <Story key={story.id} story={story}/>)
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        height: '100%'
    }
})

export default TopStories
