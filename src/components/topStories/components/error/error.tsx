import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


const Error = () => {
    return (
        <View style={styles.error}>
            <Text style={styles.text}>Something went wrong</Text>
            <Text style={styles.text}>Pull to refresh</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18
    }
})

export default Error
