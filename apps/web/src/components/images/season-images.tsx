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
  const { posters } = await tmdb.season.images(seriesId, seasonNumber)

  const orderImages = () => {
    return [...posters].sort((a, b) => b.vote_count - a.vote_count)
  }

  return <ImagesMasonry images={orderImages()} />
}
