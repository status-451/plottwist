'use client'

import type { Episode } from '@/services/tmdb'
import { Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

import { tmdbImage } from '@/utils/tmdb/image'
import { Badge } from '@plotwist/ui/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@plotwist/ui/components/ui/tooltip'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@plotwist/ui/components/ui/dialog'
import { format } from 'date-fns'
import { useLanguage } from '@/context/language'
import { locale } from '@/utils/date/locale'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@plotwist/ui/components/ui/tabs'
import { SeasonImages } from '@/components/images'
import { SeasonVideos } from '@/components/videos'

type SeasonEpisodeCardProps = {
  episode: Episode
}

export const SeasonEpisodeCard = ({ episode }: SeasonEpisodeCardProps) => {
  const {
    name,
    still_path,
    overview,
    vote_average,
    vote_count,
    episode_number,
    air_date,
    runtime,
    season_number,
    show_id,
  } = episode

  console.log({ episode })

  const { language, dictionary } = useLanguage()

  const trigger = (
    <div className="space-y-2 cursor-pointer">
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border">
        {still_path ? (
          <Image
            src={tmdbImage(still_path, 'w500')}
            alt={name}
            className="object-cover"
            loading="lazy"
            fill
            sizes="100%"
          />
        ) : (
          <ImageIcon className="text-muted" />
        )}
      </div>

      <div className="space-y-1">
        <div className="flex items-start justify-between gap-1">
          <span className="text-md">
            <b className="text-sm">{episode_number}</b>. {name}
          </span>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline">{vote_average.toFixed(1)}</Badge>
              </TooltipTrigger>

              <TooltipContent>
                <p>{vote_count} votes</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className="text-xs text-muted-foreground">{overview}</p>
      </div>
    </div>
  )

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="p-0 gap-0 border-0 rounded-none overflow-hidden">
        <div className="relative flex aspect-banner w-full items-center justify-center overflow-hidden border-b bg-muted rounded-t-md">
          {still_path && (
            <Image
              src={tmdbImage(still_path, 'original')}
              alt={name}
              className="object-cover"
              loading="lazy"
              fill
              sizes="100%"
            />
          )}
        </div>

        <DialogHeader className="p-4 space-y-3">
          <div className="space-y-1.5">
            <span className="text-muted-foreground text-xs">
              {format(new Date(air_date), 'PPP', {
                locale: locale[language],
              })}
            </span>

            <DialogTitle className="text-xl">
              {episode_number}. {name}
            </DialogTitle>

            <p className="text-sm text-muted-foreground">{overview}</p>
          </div>

          <div className="space-y-2">
            <div className="flex gap-1">
              <Badge>
                <Image
                  src="/assets/tmdb.svg"
                  width={55}
                  height={1}
                  alt="TMDB"
                  className="mr-2"
                />

                {vote_average.toFixed(1)}
              </Badge>

              <Badge>{runtime} minutos</Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="px-4 pb-4">
          <Tabs defaultValue="reviews" className="w-full p-4 lg:p-0">
            <div className="md:m-none -mx-4 max-w-[100vw] overflow-x-scroll px-4 scrollbar-hide">
              <TabsList>
                <TabsTrigger value="reviews">
                  {dictionary.tabs.reviews}
                </TabsTrigger>
                <TabsTrigger value="credits">
                  {dictionary.tabs.credits}
                </TabsTrigger>
                <TabsTrigger value="images">
                  {dictionary.tabs.images}
                </TabsTrigger>
                <TabsTrigger value="videos">
                  {dictionary.tabs.videos}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="credits" className="mt-4">
              <h1>credits</h1>
            </TabsContent>

            <TabsContent value="images" className="mt-4">
              <SeasonImages seasonNumber={season_number} seriesId={show_id} />
            </TabsContent>

            <TabsContent value="videos" className="mt-4">
              <SeasonVideos seasonNumber={season_number} seriesId={show_id} />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
