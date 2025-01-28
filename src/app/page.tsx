import { getLatestDate, getArticles, getAllDates } from '@/lib/data'
import { HomeClient } from './HomeClient'
import { getNextDate } from '@/lib/date'

export default async function Home() {
  const latestDate = await getLatestDate()
  if (!latestDate) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        記事が見つかりませんでした
      </div>
    )
  }

  const articles = await getArticles(latestDate)
  if (!articles || articles.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        記事が見つかりませんでした
      </div>
    )
  }

  const categories = [...new Set(articles.map(article => article.category))]
  const dates = await getAllDates()
  const currentIndex = dates.indexOf(latestDate)
  const prevDate = currentIndex < dates.length - 1 ? dates[currentIndex + 1] : null
  const nextDate = getNextDate(latestDate, dates)

  return (
    <HomeClient
      articles={articles}
      categories={categories}
      latestDate={latestDate}
      prevDate={prevDate}
      nextDate={nextDate}
    />
  )
}
