import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { formatDatePath } from '@/lib/date'

interface DatePaginationProps {
  currentDate: string
  prevDate: string | null
}

export function DatePagination({ currentDate, prevDate }: DatePaginationProps) {
  return (
    <div className="flex justify-end items-center py-8">
      {prevDate && (
        <Link
          href={`/news/${formatDatePath(prevDate)}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-muted"
        >
          前の日の記事
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  )
} 
