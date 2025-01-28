'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface DatePaginationProps {
  currentDate: string
  prevDate: string | null
  nextDate: string | null
}

export function DatePagination({
  currentDate,
  prevDate,
  nextDate,
}: DatePaginationProps) {
  return (
    <div className="flex justify-between">
      <Button
        variant="outline"
        disabled={!prevDate}
        asChild={!!prevDate}
      >
        {prevDate ? (
          <Link href={`/news/${prevDate.replace(/-/g, '/')}`}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            前の日
          </Link>
        ) : (
          <>
            <ChevronLeft className="h-4 w-4 mr-2" />
            前の日
          </>
        )}
      </Button>

      <Button
        variant="outline"
        disabled={!nextDate}
        asChild={!!nextDate}
      >
        {nextDate ? (
          <Link href={`/news/${nextDate.replace(/-/g, '/')}`}>
            次の日
            <ChevronRight className="h-4 w-4 ml-2" />
          </Link>
        ) : (
          <>
            次の日
            <ChevronRight className="h-4 w-4 ml-2" />
          </>
        )}
      </Button>
    </div>
  )
} 
