'use strict'

import { api_key, fetchDataFromServer } from './api.js'

export function sidebar() {
	const genreList = {}

	fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function ({ genres }) {
		for (const genre of genres) {
			genreList[genre.id] = genre.name
		}

		genreLink()
	})

	const sidebarInner = document.createElement('div')
	sidebarInner.classList.add('sidebar-inner')
	sidebarInner.innerHTML = `
    <div class="sidebar-list">
      <p class="title">Genre</p>
    </div>

    <div class="sidebar-list">
      <p class="title">Language</p>
      <a href="./movie-list.html" menu-close class="sidebar-link" onClick='getMovieList("with_original_language=ar", "Arabic")'>Arabic</a>
      <a href="./movie-list.html" menu-close class="sidebar-link" onClick='getMovieList("with_original_language=en", "English")'>English</a>
    </div>

    <div class="sidebar-footer">
      <p class="copyright">
        Copyright &copy; 2023
        <a href="https://github.com/YousifAbozid" target="_blank" rel="noopener noreferrer">Yousif Abozid</a>
      </p>
      <img src="./assets/images/tmdb-logo.svg" width="130" height="17" alt="the movie database logo" />
    </div>
  `

	const genreLink = function () {
		for (const [genreId, genreName] of Object.entries(genreList)) {
			const link = document.createElement('a')
			link.classList.add('sidebar-link')
			link.setAttribute('href', './movie-list.html')
			link.setAttribute('menu-close', '')
			link.setAttribute('onClick', `getMovieList("with_genres=${genreId}", "${genreName}")`)
			link.textContent = genreName
			sidebarInner.querySelectorAll('.sidebar-list')[0].appendChild(link)
		}

		const sidebar = document.querySelector('[sidebar]')
		sidebar.appendChild(sidebarInner)
		toggleSidebar(sidebar)
	}

	const toggleSidebar = function (sidebar) {
		// Toggle sidebar in mobile screen
		const sidebarBtn = document.querySelector('[menu-btn]')
		const sidebarTogglers = document.querySelectorAll('[menu-toggler]')
		const sidebarClose = document.querySelector('[menu-close]')
		const overlay = document.querySelector('[overlay]')

		addEventOnElements(sidebarTogglers, 'click', function () {
			sidebar.classList.toggle('active')
			sidebarBtn.classList.toggle('active')
			overlay.classList.toggle('active')
		})

		addEventOnElements(sidebarClose, 'click', function () {
			sidebar.classList.remove('active')
			sidebarBtn.classList.remove('active')
			overlay.classList.remove('active')
		})
	}
}
