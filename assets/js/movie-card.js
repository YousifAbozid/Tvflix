'use strict'

import { imageBaseURL } from './api.js'

export function createMovieCard(movie) {
  const { id, poster_path, title, release_date, vote_average } = movie

  const card = document.createElement('div')
  card.classList.add('movie-card')

  card.innerHTML = `
    <figure class="poster-box card-banner">
      <img src="${imageBaseURL}w342${poster_path}" alt="${title}" class="img-cover" />
    </figure>

    <h4 class="${title}"></h4>
    <div class="meta-list">
      <div class="meta-item">
        <img src="./assets/images/star.png" width="20" height="20" alt="rating" loading="lazy" />

        <span class="sapn">${vote_average.toFixed(1)}</span>
      </div>

      <div class="card-badge">${release_date.split('-')[0]}</div>
    </div>

    <a href="./detail.html" onclick="getMovieDetail(${id})" class="card-btn" title="${title}"></a>
  `

  return card
}
