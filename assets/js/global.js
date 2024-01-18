'use strict'

// Add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
	for (const element of elements?.length ? elements : [elements]) {
		element.addEventListener(eventType, callback)
	}
}

// Toggle search box on mobile devices or small screens

const searchBox = document.querySelector('[search-box]')
const searchToggelers = document.querySelectorAll('[search-toggler]')

addEventOnElements(searchToggelers, 'click', function () {
	searchBox.classList.toggle('active')
})

// Store movie id in local storage when user click on a movie card

const getMovieDetail = function (movieId) {
	window.localStorage.setItem('movieId', String(movieId))
}

const getMovieList = function (urlParam, genreName) {
	window.localStorage.setItem('urlParam', urlParam)
	window.localStorage.setItem('genreName', genreName)
}