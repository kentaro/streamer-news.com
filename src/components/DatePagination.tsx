import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { formatDatePath } from '@/lib/date'

interface DatePaginationProps {
  currentDate: string
  prevDate: string | null
  nextDate: string | null
}

export function DatePagination({ currentDate, prevDate, nextDate }: DatePaginationProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        {nextDate && (
          <Link href={`/news/${formatDatePath(nextDate)}`}>
            <Button variant="outline" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              {nextDate}
            </Button>
          </Link>
        )}
      </div>

      <div className="flex-1 text-center">
        <span className="text-muted-foreground">{currentDate}</span>
      </div>

      <div className="flex-1 text-right">
        {prevDate && (
          <Link href={`/news/${formatDatePath(prevDate)}`}>
            <Button variant="outline" className="gap-2">
              {prevDate}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
} 
