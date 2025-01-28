import { getLatestDate, getArticles, getAllDates } from "@/lib/data"
import { ClientWrapper } from "@/components/ClientWrapper"

export default async function Home() {
  const dates = await getAllDates()
  const latestDate = await getLatestDate()
  const articles = await getArticles(latestDate)
  const prevDate = dates[dates.indexOf(latestDate) + 1] || null
  const nextDate = dates[dates.indexOf(latestDate) - 1] || null

  return (
    <ClientWrapper
      articles={articles}
      currentDate={latestDate}
      prevDate={prevDate}
      nextDate={nextDate}
    />
  )
}
