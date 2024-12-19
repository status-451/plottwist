import { tmdb } from '@/services/tmdb'
import { getDictionary } from '@/utils/dictionaries'
import { tmdbImage } from '@/utils/tmdb/image'
import type { Buy, Language, Rent } from '@plotwist_app/tmdb'
import { X } from 'lucide-react'
import Image from 'next/image'

type WhereToWatchBaseProps = {
  id: number
  language: Language
}

type WhereToWatchSeasonProps = WhereToWatchBaseProps & {
  variant: 'season'
  seasonNumber: number
}

type WhereToWatchOtherProps = WhereToWatchBaseProps & {
  variant: 'movie' | 'tv'
}

type WhereToWatchProps = WhereToWatchSeasonProps | WhereToWatchOtherProps

export async function WhereToWatch({
  id,
  language,
  variant,
  ...rest
}: WhereToWatchProps) {
  const getResults = async () => {
    if (variant === 'season') {
      const { seasonNumber } = rest as WhereToWatchSeasonProps
      const { results } = await tmdb.season.watchProviders(id, seasonNumber)
      return results
    }

    const { results } = await tmdb.watchProviders.item(variant, id)
    return results
  }

  const results = await getResults()
  const dictionary = await getDictionary(language)

  const resultsByLanguage = {
    'de-DE': results.DE,
    'en-US': results.US,
    'es-ES': results.ES,
    'fr-FR': results.FR,
    'it-IT': results.IT,
    'ja-JP': results.JP,
    'pt-BR': results.BR,
  }

  const watchProvider =
    resultsByLanguage[language] ?? resultsByLanguage['en-US']

  return (
    <div className="space-y-8 md:space-y-0 md:grid-cols-3 md:grid md:gap-8">
      <div className="">
        <div className="text-md font-medium">
          {dictionary.watch_providers.stream}
        </div>

        <div className="">
          {watchProvider?.flatrate ? (
            watchProvider.flatrate.map(item => (
              <div key={item.provider_id}>
                <WhereToWatchItem item={item} />
              </div>
            ))
          ) : (
            <Unavailable message={dictionary.unavailable} />
          )}
        </div>
      </div>

      <div className="">
        <div className="text-md font-medium">
          {dictionary.watch_providers.rent}
        </div>

        <div className="">
          {watchProvider?.rent ? (
            watchProvider.rent.map(item => (
              <div key={item.provider_id}>
                <WhereToWatchItem item={item} />
              </div>
            ))
          ) : (
            <Unavailable message={dictionary.unavailable} />
          )}
        </div>
      </div>

      <div className="">
        <div className="text-md font-medium">
          {dictionary.watch_providers.buy}
        </div>

        <div className="">
          {watchProvider?.buy ? (
            watchProvider.buy.map(item => (
              <div key={item.provider_id}>
                <WhereToWatchItem item={item} />
              </div>
            ))
          ) : (
            <Unavailable message={dictionary.unavailable} />
          )}
        </div>
      </div>
    </div>
  )
}

type WatchProviderItemProps = { item: Buy | Rent }

export const WhereToWatchItem = ({ item }: WatchProviderItemProps) => {
  const src = tmdbImage(item.logo_path)

  return (
    <div className="flex items-center gap-2 border-b border-dashed py-2">
      <div
        className="relative aspect-square h-6 w-6 overflow-hidden rounded-lg border"
        key={item.provider_id}
      >
        <Image
          className="aspect-square w-full"
          src={src}
          loading="lazy"
          alt={item.provider_name}
          fill
          sizes="100%"
        />
      </div>

      <span className="text-sm">{item.provider_name}</span>
    </div>
  )
}
function Unavailable({ message }: { message: string }) {
  return (
    <div className="py-2 flex gap-2 border-b border-dashed items-center text-sm  text-muted-foreground">
      <div className="w-6 h-6 border rounded-lg flex items-center justify-center">
        <X size="16" />
      </div>
      {message}
    </div>
  )
}
