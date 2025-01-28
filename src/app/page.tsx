import { getLatestDate, getArticles, getAllDates } from "@/lib/data"
import { HomeClient } from "@/app/HomeClient"

export default async function Home() {
  const dates = await getAllDates()
  const latestDate = await getLatestDate()
  const articles = await getArticles(latestDate)
  const categories = [...new Set(articles.map((a) => a.category))]
  const prevDate = dates[dates.indexOf(latestDate) + 1] || null
  const nextDate = dates[dates.indexOf(latestDate) - 1] || null

  return (
    <HomeClient
      articles={articles}
      categories={categories}
      currentDate={latestDate}
      prevDate={prevDate}
      nextDate={nextDate}
    />
  )
}
