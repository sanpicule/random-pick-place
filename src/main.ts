import './style.css'
import { STATIONS, type Station } from './stations'

const CATEGORIES = [
  'カフェ',
  'ランチ',
  '居酒屋',
  '喫茶店',
  'ベーカリー',
  'スイーツ',
  '観光',
  '公園',
]

const app = document.querySelector<HTMLDivElement>('#app')!

function pickRandom<T>(arr: T[], exclude?: T): T {
  if (arr.length === 0) throw new Error('empty array')
  if (!exclude) return arr[Math.floor(Math.random() * arr.length)]
  if (arr.length === 1) return arr[0]
  let candidate: T
  do {
    candidate = arr[Math.floor(Math.random() * arr.length)]
  } while (candidate === exclude)
  return candidate
}

let lastPicked: Station | undefined

function googleMapsLink(station: Station, category?: string) {
  const q = encodeURIComponent(category ? `${station.name} ${category}` : station.name)
  return `https://www.google.com/maps/search/${q}`
}

function render(station: Station) {
  app.innerHTML = `
    <div class="container">
      <h1>ランダム駅さんぽ</h1>
      <p class="subtitle">東京23区の、ちょっとマイナーな駅を提案します</p>

      <div class="station">
        <div class="station-name">${station.name}</div>
        <div class="station-ward">${station.ward}</div>
      </div>

      <div class="actions">
        <button id="pick" class="primary">ランダムにピック</button>
        <a id="openMap" class="secondary" href="${googleMapsLink(station)}" target="_blank" rel="noopener">駅周辺を地図で見る</a>
      </div>

      <div class="category-list">
        ${CATEGORIES.map(
          (c) => `<a class="chip" href="${googleMapsLink(station, c)}" target="_blank" rel="noopener">${c}</a>`
        ).join('')}
      </div>
    </div>
  `

  document.querySelector<HTMLButtonElement>('#pick')!.onclick = () => {
    const next = pickRandom(STATIONS, lastPicked)
    lastPicked = next
    render(next)
  }
}

lastPicked = pickRandom(STATIONS)
render(lastPicked)
