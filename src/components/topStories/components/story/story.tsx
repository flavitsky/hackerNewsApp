import React, {FC} from 'react'
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Stories} from '../../../../types/stories'

interface StoryProps {
    story: Stories.Story
}

const Story: FC<StoryProps> = ({story}) => {
    const onLinkPress = () => {
        Linking.openURL(story.url)
    }

    return (
        <View style={styles.storyCard}>
            <Text style={styles.title}>{story.title}</Text>
            <Text style={styles.author}>by {story.by}</Text>
            <Text style={styles.text}>timestamp: {story.time}</Text>
            <Text style={styles.text}>Story score: {story.score}</Text>
            <Text style={styles.text}>Story ID: {story.id}</Text>
            {story.karma && <Text style={styles.text}>Author karma: {story.karma}</Text>}

            <TouchableOpacity onPress={onLinkPress}>
                <View style={styles.button}>
                    <Text style={styles.link}>Read the full story at the source</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    storyCard: {
        margin: 10,
        padding: 10,
        paddingBottom: 20,
        borderBottomWidth: 1
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 4,
        backgroundColor: 'darkgrey',
        color: 'white',
    },
    link: {
        margin: 5,
        color: 'white'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 12
    },
    author: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'grey',
        marginBottom: 10
    }
})

export default Story
