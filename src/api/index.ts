import axios from 'axios'

const baseURL = 'https://hacker-news.firebaseio.com/v0/'

const urlFormatter = (url: string): string => {
  return `${baseURL}${url}.json`
}

export function getTopStoriesAPI() {
  return axios.get(urlFormatter('topstories'))
}

export function getStoryAPI(itemID: string) {
  return axios.get(urlFormatter(`item/${itemID}`))
}

export function getUserAPI(userID: string) {
  return axios.get(urlFormatter(`user/${userID}`))
}
