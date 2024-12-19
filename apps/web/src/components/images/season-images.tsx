import { tmdb } from '@/services/tmdb'
import { ImagesMasonry } from './images-masonry'

type SeasonImagesProps = {
  seriesId: number
  seasonNumber: number
}

export async function SeasonImages({
  seriesId,
  seasonNumber,
}: SeasonImagesProps) {
  const { posters, ...a } = await tmdb.season.images(seriesId, seasonNumber)

  console.log({ a })

  const orderImages = () => {
    return [...posters].sort((a, b) => b.vote_count - a.vote_count)
  }

  return <ImagesMasonry images={orderImages()} />
}
