import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

interface Station {
  name: string
  ward: string
  category: string
}

const stations: Station[] = [
  { name: "新小岩", ward: "葛飾区", category: "下町" },
  { name: "亀有", ward: "葛飾区", category: "下町" },
  { name: "金町", ward: "葛飾区", category: "下町" },
  { name: "堀切菖蒲園", ward: "葛飾区", category: "下町" },
  { name: "お花茶屋", ward: "葛飾区", category: "下町" },
  { name: "青砥", ward: "葛飾区", category: "下町" },
  { name: "立石", ward: "葛飾区", category: "下町" },
  { name: "四ツ木", ward: "葛飾区", category: "下町" },
  { name: "京成高砂", ward: "葛飾区", category: "下町" },
  { name: "柴又", ward: "葛飾区", category: "下町" },
  { name: "小岩", ward: "江戸川区", category: "下町" },
  { name: "船堀", ward: "江戸川区", category: "下町" },
  { name: "一之江", ward: "江戸川区", category: "下町" },
  { name: "瑞江", ward: "江戸川区", category: "下町" },
  { name: "篠崎", ward: "江戸川区", category: "下町" },
  { name: "西葛西", ward: "江戸川区", category: "下町" },
  { name: "葛西", ward: "江戸川区", category: "下町" },
  { name: "葛西臨海公園", ward: "江戸川区", category: "下町" },
  { name: "平井", ward: "江戸川区", category: "下町" },
  { name: "錦糸町", ward: "墨田区", category: "下町" },
  { name: "両国", ward: "墨田区", category: "下町" },
  { name: "押上", ward: "墨田区", category: "下町" },
  { name: "曳舟", ward: "墨田区", category: "下町" },
  { name: "東向島", ward: "墨田区", category: "下町" },
  { name: "鐘ヶ淵", ward: "墨田区", category: "下町" },
  { name: "堀切", ward: "墨田区", category: "下町" },
  { name: "小村井", ward: "墨田区", category: "下町" },
  { name: "東あずま", ward: "墨田区", category: "下町" },
  { name: "亀戸", ward: "江東区", category: "下町" },
  { name: "大島", ward: "江東区", category: "下町" },
  { name: "西大島", ward: "江東区", category: "下町" },
  { name: "住吉", ward: "江東区", category: "下町" },
  { name: "森下", ward: "江東区", category: "下町" },
  { name: "清澄白河", ward: "江東区", category: "下町" },
  { name: "門前仲町", ward: "江東区", category: "下町" },
  { name: "木場", ward: "江東区", category: "下町" },
  { name: "東陽町", ward: "江東区", category: "下町" },
  { name: "南砂町", ward: "江東区", category: "下町" },
  { name: "豊洲", ward: "江東区", category: "下町" },
  { name: "新木場", ward: "江東区", category: "下町" },
  { name: "有明", ward: "江東区", category: "下町" },
  { name: "国際展示場", ward: "江東区", category: "下町" },
  { name: "テレコムセンター", ward: "江東区", category: "下町" },
  { name: "青海", ward: "江東区", category: "下町" },
  { name: "お台場海浜公園", ward: "港区", category: "都心" },
  { name: "台場", ward: "港区", category: "都心" },
  { name: "新橋", ward: "港区", category: "都心" },
  { name: "汐留", ward: "港区", category: "都心" },
  { name: "竹芝", ward: "港区", category: "都心" },
  { name: "日の出", ward: "港区", category: "都心" },
  { name: "芝浦ふ頭", ward: "港区", category: "都心" },
  { name: "田町", ward: "港区", category: "都心" },
  { name: "品川", ward: "港区", category: "都心" },
  { name: "高輪ゲートウェイ", ward: "港区", category: "都心" },
  { name: "泉岳寺", ward: "港区", category: "都心" },
  { name: "白金高輪", ward: "港区", category: "都心" },
  { name: "白金台", ward: "港区", category: "都心" },
  { name: "目黒", ward: "品川区", category: "都心" },
  { name: "不動前", ward: "品川区", category: "都心" },
  { name: "武蔵小山", ward: "品川区", category: "都心" },
  { name: "西小山", ward: "品川区", category: "都心" },
  { name: "荏原中延", ward: "品川区", category: "都心" },
  { name: "中延", ward: "品川区", category: "都心" },
  { name: "荏原町", ward: "品川区", category: "都心" },
  { name: "旗の台", ward: "品川区", category: "都心" },
  { name: "長原", ward: "大田区", category: "都心" },
  { name: "洗足池", ward: "大田区", category: "都心" },
  { name: "石川台", ward: "大田区", category: "都心" },
  { name: "雪が谷大塚", ward: "大田区", category: "都心" },
  { name: "御嶽山", ward: "大田区", category: "都心" },
  { name: "久が原", ward: "大田区", category: "都心" },
  { name: "千鳥町", ward: "大田区", category: "都心" },
  { name: "池上", ward: "大田区", category: "都心" },
  { name: "蓮沼", ward: "大田区", category: "都心" },
  { name: "蒲田", ward: "大田区", category: "都心" },
  { name: "京急蒲田", ward: "大田区", category: "都心" },
  { name: "糀谷", ward: "大田区", category: "都心" },
  { name: "大鳥居", ward: "大田区", category: "都心" },
  { name: "穴守稲荷", ward: "大田区", category: "都心" },
  { name: "天空橋", ward: "大田区", category: "都心" },
  { name: "羽田空港第3ターミナル", ward: "大田区", category: "都心" },
  { name: "羽田空港第1・第2ターミナル", ward: "大田区", category: "都心" },
  { name: "流通センター", ward: "大田区", category: "都心" },
  { name: "昭和島", ward: "大田区", category: "都心" },
  { name: "整備場", ward: "大田区", category: "都心" },
  { name: "天王洲アイル", ward: "品川区", category: "都心" },
  { name: "大井町", ward: "品川区", category: "都心" },
  { name: "立会川", ward: "品川区", category: "都心" },
  { name: "大森海岸", ward: "大田区", category: "都心" },
  { name: "平和島", ward: "大田区", category: "都心" },
  { name: "大森町", ward: "大田区", category: "都心" },
  { name: "梅屋敷", ward: "大田区", category: "都心" },
  { name: "戸越", ward: "品川区", category: "都心" },
  { name: "北千束", ward: "大田区", category: "都心" },
  { name: "大岡山", ward: "大田区", category: "都心" },
  { name: "緑が丘", ward: "大田区", category: "都心" },
  { name: "自由が丘", ward: "目黒区", category: "都心" },
  { name: "九品仏", ward: "世田谷区", category: "住宅地" },
  { name: "尾山台", ward: "世田谷区", category: "住宅地" },
  { name: "等々力", ward: "世田谷区", category: "住宅地" },
  { name: "上野毛", ward: "世田谷区", category: "住宅地" },
  { name: "二子玉川", ward: "世田谷区", category: "住宅地" },
  { name: "用賀", ward: "世田谷区", category: "住宅地" },
  { name: "桜新町", ward: "世田谷区", category: "住宅地" },
  { name: "駒沢大学", ward: "世田谷区", category: "住宅地" },
  { name: "三軒茶屋", ward: "世田谷区", category: "住宅地" },
  { name: "池尻大橋", ward: "世田谷区", category: "住宅地" },
  { name: "三宿", ward: "世田谷区", category: "住宅地" },
  { name: "西太子堂", ward: "世田谷区", category: "住宅地" },
  { name: "若林", ward: "世田谷区", category: "住宅地" },
  { name: "松陰神社前", ward: "世田谷区", category: "住宅地" },
  { name: "世田谷", ward: "世田谷区", category: "住宅地" },
  { name: "上町", ward: "世田谷区", category: "住宅地" },
  { name: "宮の坂", ward: "世田谷区", category: "住宅地" },
  { name: "山下", ward: "世田谷区", category: "住宅地" },
  { name: "松原", ward: "世田谷区", category: "住宅地" },
  { name: "梅ヶ丘", ward: "世田谷区", category: "住宅地" },
  { name: "豪徳寺", ward: "世田谷区", category: "住宅地" },
  { name: "経堂", ward: "世田谷区", category: "住宅地" },
  { name: "千歳船橋", ward: "世田谷区", category: "住宅地" },
  { name: "祖師ヶ谷大蔵", ward: "世田谷区", category: "住宅地" },
  { name: "成城学園前", ward: "世田谷区", category: "住宅地" },
  { name: "喜多見", ward: "世田谷区", category: "住宅地" },
  { name: "狛江", ward: "狛江市", category: "住宅地" },
  { name: "和泉多摩川", ward: "狛江市", category: "住宅地" },
  { name: "登戸", ward: "川崎市", category: "住宅地" },
  { name: "向ヶ丘遊園", ward: "川崎市", category: "住宅地" },
  { name: "生田", ward: "川崎市", category: "住宅地" },
  { name: "読売ランド前", ward: "川崎市", category: "住宅地" },
  { name: "百合ヶ丘", ward: "川崎市", category: "住宅地" },
  { name: "新百合ヶ丘", ward: "川崎市", category: "住宅地" },
  { name: "柿生", ward: "川崎市", category: "住宅地" },
  { name: "鶴川", ward: "町田市", category: "住宅地" },
  { name: "玉川学園前", ward: "町田市", category: "住宅地" },
  { name: "町田", ward: "町田市", category: "住宅地" },
  { name: "小金井", ward: "小金井市", category: "住宅地" },
  { name: "東小金井", ward: "小金井市", category: "住宅地" },
  { name: "武蔵小金井", ward: "小金井市", category: "住宅地" },
  { name: "花小金井", ward: "小平市", category: "住宅地" },
  { name: "小平", ward: "小平市", category: "住宅地" },
  { name: "鷹の台", ward: "小平市", category: "住宅地" },
  { name: "玉川上水", ward: "立川市", category: "住宅地" },
  { name: "砂川七番", ward: "立川市", category: "住宅地" },
  { name: "泉体育館", ward: "立川市", category: "住宅地" },
  { name: "西武立川", ward: "立川市", category: "住宅地" },
  { name: "立川北", ward: "立川市", category: "住宅地" },
  { name: "立川", ward: "立川市", category: "住宅地" },
  { name: "立川南", ward: "立川市", category: "住宅地" },
  { name: "西国立", ward: "国立市", category: "住宅地" },
  { name: "国立", ward: "国立市", category: "住宅地" },
  { name: "矢川", ward: "国立市", category: "住宅地" },
  { name: "谷保", ward: "国立市", category: "住宅地" },
  { name: "府中本町", ward: "府中市", category: "住宅地" },
  { name: "府中", ward: "府中市", category: "住宅地" },
  { name: "分倍河原", ward: "府中市", category: "住宅地" },
  { name: "中河原", ward: "府中市", category: "住宅地" },
  { name: "聖蹟桜ヶ丘", ward: "多摩市", category: "住宅地" },
  { name: "百草園", ward: "日野市", category: "住宅地" },
  { name: "高幡不動", ward: "日野市", category: "住宅地" },
  { name: "南平", ward: "日野市", category: "住宅地" },
  { name: "平山城址公園", ward: "日野市", category: "住宅地" },
  { name: "長沼", ward: "稲城市", category: "住宅地" },
  { name: "南多摩", ward: "稲城市", category: "住宅地" },
  { name: "稲城長沼", ward: "稲城市", category: "住宅地" },
  { name: "京王よみうりランド", ward: "稲城市", category: "住宅地" },
  { name: "稲城", ward: "稲城市", category: "住宅地" },
  { name: "矢野口", ward: "稲城市", category: "住宅地" },
  { name: "調布", ward: "調布市", category: "住宅地" },
  { name: "布田", ward: "調布市", category: "住宅地" },
  { name: "国領", ward: "調布市", category: "住宅地" },
  { name: "柴崎", ward: "調布市", category: "住宅地" },
  { name: "つつじヶ丘", ward: "調布市", category: "住宅地" },
  { name: "仙川", ward: "調布市", category: "住宅地" },
  { name: "芦花公園", ward: "世田谷区", category: "住宅地" },
  { name: "八幡山", ward: "世田谷区", category: "住宅地" },
  { name: "上北沢", ward: "世田谷区", category: "住宅地" },
  { name: "桜上水", ward: "世田谷区", category: "住宅地" },
  { name: "下高井戸", ward: "世田谷区", category: "住宅地" },
  { name: "明大前", ward: "世田谷区", category: "住宅地" },
  { name: "永福町", ward: "杉並区", category: "住宅地" },
  { name: "西永福", ward: "杉並区", category: "住宅地" },
  { name: "浜田山", ward: "杉並区", category: "住宅地" },
  { name: "高井戸", ward: "杉並区", category: "住宅地" },
  { name: "富士見ヶ丘", ward: "杉並区", category: "住宅地" },
  { name: "久我山", ward: "杉並区", category: "住宅地" },
  { name: "三鷹台", ward: "三鷹市", category: "住宅地" },
  { name: "井の頭公園", ward: "三鷹市", category: "住宅地" },
  { name: "吉祥寺", ward: "武蔵野市", category: "住宅地" },
  { name: "三鷹", ward: "三鷹市", category: "住宅地" },
  { name: "武蔵境", ward: "武蔵野市", category: "住宅地" },
  { name: "国分寺", ward: "国分寺市", category: "住宅地" },
  { name: "西国分寺", ward: "国分寺市", category: "住宅地" },
  { name: "日野", ward: "日野市", category: "住宅地" },
  { name: "豊田", ward: "日野市", category: "住宅地" },
  { name: "八王子", ward: "八王子市", category: "住宅地" },
  { name: "西八王子", ward: "八王子市", category: "住宅地" },
  { name: "高尾", ward: "八王子市", category: "住宅地" }
]

interface Category {
  name: string
  icon: string
}

const CATEGORIES: Category[] = [
  { name: 'カフェ', icon: '☕' },
  { name: 'ランチ', icon: '🍱' },
  { name: '居酒屋', icon: '🍺' },
  { name: '喫茶店', icon: '🫖' },
  { name: 'ベーカリー', icon: '🥐' },
  { name: 'スイーツ', icon: '🍰' },
  { name: '観光', icon: '🗼' },
  { name: '公園', icon: '🌳' },
]

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

function googleMapsLink(station: Station, category?: string) {
  const q = encodeURIComponent(category ? `${station.name} ${category}` : station.name)
  return `https://www.google.com/maps/search/${q}`
}

function hapticFeedback() {
  if ('vibrate' in navigator) {
    navigator.vibrate(50)
  }
}

function App() {
  const [currentStation, setCurrentStation] = useState<Station>(() => pickRandom(stations))
  const [isAnimating, setIsAnimating] = useState(false)

  const pickNewStation = () => {
    hapticFeedback()
    setIsAnimating(true)
    setTimeout(() => {
      const next = pickRandom(stations, currentStation)
      setCurrentStation(next)
      setIsAnimating(false)
    }, 200)
  }

  const handleSwipe = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX
    const touchStartY = e.touches[0].clientY

    const handleTouchEnd = (endEvent: TouchEvent) => {
      const touchEndX = endEvent.changedTouches[0].clientX
      const touchEndY = endEvent.changedTouches[0].clientY
      
      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY
      
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          pickNewStation()
        }
      }
      
      document.removeEventListener('touchend', handleTouchEnd)
    }

    document.addEventListener('touchend', handleTouchEnd)
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1 className="app-title">ランダム駅さんぽ</h1>
          <span className="app-badge">Beta</span>
        </div>
      </header>

      <main className="container">
        <section className="hero-section fade-in">
          <h2 className="hero-title">東京の隠れた魅力を発見</h2>
          <p className="hero-subtitle">
            東京23区の、あまり知られていない駅をランダムに提案します。<br />
            新しい発見があるかも？
          </p>
          <div className="feature-badge">
            <span>🎲</span>
            <span>{stations.length}駅から選択</span>
          </div>
        </section>

        <section className="station-wrapper fade-in-delay-1">
          <div 
            className={`station ${isAnimating ? 'picking' : ''}`}
            onTouchStart={handleSwipe}
            onClick={pickNewStation}
          >
            <div className="station-label">今日のおすすめ</div>
            <div className="station-name">{currentStation.name}</div>
            <div className="station-ward">{currentStation.ward}</div>
            <div className="station-decoration"></div>
          </div>
        </section>

        <section className="actions fade-in-delay-2">
          <button 
            className="primary" 
            onClick={pickNewStation}
            aria-label="ランダムにピック"
          >
            <span className="button-icon">🎲</span>
            <span className="button-text">ランダムにピック</span>
          </button>
          <a 
            className="secondary" 
            href={googleMapsLink(currentStation)} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="駅周辺を地図で見る"
          >
            <span className="button-icon">📍</span>
            <span className="button-text">駅周辺を地図で見る</span>
          </a>
        </section>

        <section className="category-section fade-in-delay-3">
          <div className="category-header">
            <h3 className="category-title">カテゴリから探す</h3>
            <p className="category-description">気になるカテゴリをタップして周辺を検索</p>
          </div>
          <div className="category-grid">
            {CATEGORIES.map((category) => (
              <a 
                key={category.name}
                className="category-item" 
                href={googleMapsLink(currentStation, category.name)} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${currentStation.name}の${category.name}を検索`}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-text">{category.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            東京の隠れた魅力を発見するWebアプリ
          </p>
          <p className="footer-text">
            <small>© 2026 ランダム駅さんぽ</small>
          </p>
        </div>
      </footer>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
