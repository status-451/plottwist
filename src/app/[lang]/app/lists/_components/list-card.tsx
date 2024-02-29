'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'
import { MoreVertical, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { APP_QUERY_CLIENT } from '@/context/app/app'
import { LISTS_QUERY_KEY, useLists } from '@/context/lists'
import { useLanguage } from '@/context/language'

import { tmdbImage } from '@/utils/tmdb/image'

import { List } from '@/types/supabase/lists'

type ListCardProps = { list: List }

export const ListCard = ({ list }: ListCardProps) => {
  const { handleDeleteList } = useLists()
  const { language, dictionary } = useLanguage()
  const [open, setOpen] = useState(false)

  const href = `/${language}/app/lists/${list.id}`

  return (
    <>
      <div className="space-y-2">
        <Link href={href}>
          <div className="relative aspect-video w-full overflow-hidden rounded-md border bg-background/50 shadow">
            {list.cover_path && (
              <Image
                fill
                className="object-cover"
                src={tmdbImage(list.cover_path)}
                alt={list.name}
                sizes="100%"
              />
            )}
          </div>
        </Link>

        <div className="space-y-1">
          <div className="flex justify-between gap-1">
            <Link href={href} className="hover:underline">
              {list.name}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="icon" className="h-6 w-6">
                  <MoreVertical size={12} />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setOpen(true)}>
                  <Trash size={12} className="mr-2" />
                  {dictionary.list_card.delete}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <p className="line-clamp-3 text-xs text-muted-foreground">
            {list.description}
          </p>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="gap-1">
            <DialogTitle>{dictionary.list_card.dialog_title}</DialogTitle>
            <DialogDescription>
              {dictionary.list_card.dialog_description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:flex-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                {dictionary.list_card.dialog_close}
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => {
                handleDeleteList.mutate(list.id, {
                  onSuccess: () => {
                    APP_QUERY_CLIENT.invalidateQueries({
                      queryKey: LISTS_QUERY_KEY,
                    })

                    toast.success(dictionary.list_card.delete_success)
                  },
                  onError: (error) => {
                    toast.error(error.message)
                  },
                })
              }}
            >
              {dictionary.list_card.delete}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
