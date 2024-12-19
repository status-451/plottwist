import type { PropsWithChildren } from 'react'
import type { TvSeriePageProps } from './page'
import { tmdb } from '@/services/tmdb'
import { Banner } from '@/components/banner'
import { tmdbImage } from '@/utils/tmdb/image'

export default async function Layout({
  children,
  params,
}: TvSeriePageProps & PropsWithChildren) {
  const { id, lang } = await params
  const { backdrop_path } = await tmdb.tv.details(Number(id), lang)

  return (
    <section className="mx-auto max-w-6xl relative">
      <Banner url={tmdbImage(backdrop_path)} />
      {children}
    </section>
  )
}
