import { tmdb } from '@/services/tmdb'
import { Video } from './videos'

type SeasonVideosProps = {
  seriesId: number
  seasonNumber: number
}

export async function SeasonVideos({
  seasonNumber,
  seriesId,
}: SeasonVideosProps) {
  const { results } = await tmdb.season.videos(seriesId, seasonNumber)

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2" data-testid="videos">
      {results.map(video => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  )
}
