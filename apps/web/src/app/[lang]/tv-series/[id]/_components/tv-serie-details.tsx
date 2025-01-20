import { Banner } from '@/components/banner'

import { tmdbImage } from '@/utils/tmdb/image'

import { tmdb } from '@/services/tmdb'
import type { Language } from '@/types/languages'
import { TvSerieInfos } from './tv-serie-infos'
import { TvSerieTabs } from './tv-serie-tabs'
import { Suspense } from 'react'

type TvSerieDetailsProps = {
  id: number
  language: Language
}

export const TvSerieDetails = async ({ id, language }: TvSerieDetailsProps) => {
  const tvSerie = await tmdb.tv.details(id, language)

  return (
    <div className="mx-auto max-w-6xl relative">
      <Banner url={tmdbImage(tvSerie.backdrop_path)} />
      <section className="mx-auto my-8 max-w-4xl space-y-6">
        <Suspense>
          <TvSerieInfos language={language} tvSerie={tvSerie} />
        </Suspense>

        <Suspense>
          <TvSerieTabs language={language} tvSerie={tvSerie} />
        </Suspense>
      </section>
    </div>
  )
}
