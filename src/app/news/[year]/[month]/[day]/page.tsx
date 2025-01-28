import { getAllDates, getArticles } from "@/lib/data"
import { ClientWrapper } from "@/components/ClientWrapper"

interface DatePageProps {
  params: {
    year: string
    month: string
    day: string
  }
}

export async function generateStaticParams() {
  const dates = await getAllDates()
  return dates.map((date) => {
    const [year, month, day] = date.split("-")
    return { year, month, day }
  })
}

export default async function DatePage({ params }: DatePageProps) {
  const { year, month, day } = params
  const currentDate = `${year}-${month}-${day}`
  const dates = await getAllDates()
  const articles = await getArticles(currentDate)
  const prevDate = dates[dates.indexOf(currentDate) + 1] || null
  const nextDate = dates[dates.indexOf(currentDate) - 1] || null

  return (
    <ClientWrapper
      articles={articles}
      currentDate={currentDate}
      prevDate={prevDate}
      nextDate={nextDate}
    />
  )
} 
