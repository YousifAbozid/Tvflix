'use strict'

const api_key = 'e9c68e757fc2d33e3e7286a87941d531'
const imageBaseURL = 'https://image.tmdb.org/t/p/'

/**
 * Fetches data from the server using the provided URL and calls the callback function with the retrieved data.
 *
 * @param {string} url - The URL from which to fetch the data.
 * @param {function} callback - The callback function to be called with the retrieved data.
 * @param {any} optionalParams - Optional parameters that can be passed to the callback function.
 */
const fetchDataFromServer = function (url, callback, optionalParams) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParams))
}

export { api_key, imageBaseURL, fetchDataFromServer }
