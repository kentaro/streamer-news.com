import { getArticles, getAllDates } from '@/lib/data'
import { HomeClient } from '@/app/HomeClient'
import { parseDatePath, getNextDate, getPrevDate } from '@/lib/date'

interface DatePageProps {
  params: Promise<{
    year: string
    month: string
    day: string
  }>
}

export async function generateStaticParams() {
  const dates = await getAllDates()
  return dates.map(date => {
    const [year, month, day] = date.split('-')
    return { year, month, day }
  })
}

export default async function DatePage({ params }: DatePageProps) {
  const { year, month, day } = await params
  const currentDate = parseDatePath(year, month, day)
  const articles = await getArticles(currentDate)
  const categories = [...new Set(articles.map(article => article.category))]
  
  const dates = await getAllDates()
  const prevDate = getPrevDate(currentDate, dates)
  const nextDate = getNextDate(currentDate, dates)

  return (
    <HomeClient
      articles={articles}
      categories={categories}
      latestDate={currentDate}
      prevDate={prevDate}
      nextDate={nextDate}
    />
  )
} 
