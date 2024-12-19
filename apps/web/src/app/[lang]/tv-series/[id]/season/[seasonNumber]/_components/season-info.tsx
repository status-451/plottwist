import { ItemReview } from '@/components/item-review'
import { Poster } from '@/components/poster'
import type { Language } from '@/types/languages'
import { locale } from '@/utils/date/locale'
import { tmdbImage } from '@/utils/tmdb/image'
import { Badge } from '@plotwist/ui/components/ui/badge'

import type {
  SeasonDetails as SeasonDetailsType,
  TvSerieDetails,
} from '@plotwist_app/tmdb'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

type SeasonInfoProps = {
  season: SeasonDetailsType
  serie: TvSerieDetails
  language: Language
}

export function SeasonInfo({ season, serie, language }: SeasonInfoProps) {
  const { poster_path, air_date, name, overview, vote_average } = season

  const actions = (
    <div className="flex flex-wrap items-center gap-1">
      <ItemReview />
    </div>
  )

  const votes = (
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
  )

  return (
    <section className="space-y-4 p-4 lg:p-0">
      <div className="flex flex-row items-end gap-4 md:items-start">
        <aside className="-mt-32 w-2/5 space-y-2 md:w-1/3">
          <Poster
            url={poster_path ? tmdbImage(poster_path, 'original') : undefined}
            alt={name}
          />
        </aside>

        <article className="flex w-3/5 flex-col gap-2 md:w-2/3">
          {air_date && (
            <span className="text-xs text-muted-foreground">
              {format(new Date(air_date), 'PPP', {
                locale: locale[language],
              })}
            </span>
          )}

          <h1 className="text-lg font-bold md:text-4xl">
            <Link
              href={`/${language}/tv-series/${serie.id}`}
              className="hover:underline"
            >
              {serie.name}
            </Link>
            : {name}
          </h1>

          <div className="hidden flex-wrap items-center gap-2 whitespace-nowrap md:flex">
            {votes}
          </div>

          <p className="hidden text-xs leading-5 text-muted-foreground md:block md:text-sm md:leading-6">
            {overview}
          </p>

          <div className="hidden md:block">{actions}</div>
        </article>
      </div>

      <div className="space-y-2 md:hidden">
        {actions}
        <p className="text-sm/7 text-muted-foreground">{overview}</p>
        <div className="flex gap-2 flex-wrap">{votes}</div>
      </div>
    </section>
  )
}
