import { tmdb } from '@/services/tmdb'
import type { PageProps } from '@/types/languages'
import { SeasonInfo } from './_components/season-info'
import { getDictionary } from '@/utils/dictionaries'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@plotwist/ui/components/ui/tabs'
import { SeasonCredits } from '@/components/credits'
import { SeasonImages } from '@/components/images'
import { SeasonVideos } from '@/components/videos'
import { SeasonEpisodes } from './_components/season-episodes'

type Props = PageProps<{ id: string; seasonNumber: string }>

export const dynamic = 'force-static'

export default async function SeasonNumber({ params }: Props) {
  const { lang, ...restParams } = await params

  const seriesId = Number(restParams.id)
  const seasonNumber = Number(restParams.seasonNumber)

  const season = await tmdb.season.details(seriesId, seasonNumber, lang)
  const serie = await tmdb.tv.details(seriesId, lang)

  const dictionary = await getDictionary(lang)

  return (
    <section className="mx-auto my-8 max-w-4xl space-y-6">
      <SeasonInfo serie={serie} season={season} language={lang} />

      <Tabs defaultValue="reviews" className="w-full p-4 lg:p-0">
        <div className="md:m-none -mx-4 max-w-[100vw] overflow-x-scroll px-4 scrollbar-hide">
          <TabsList>
            <TabsTrigger value="reviews">{dictionary.tabs.reviews}</TabsTrigger>
            <TabsTrigger value="where_to_watch">
              {dictionary.where_to_watch}
            </TabsTrigger>
            <TabsTrigger value="episodes">{dictionary.episodes}</TabsTrigger>
            <TabsTrigger value="credits">{dictionary.tabs.credits}</TabsTrigger>
            <TabsTrigger value="images">{dictionary.tabs.images}</TabsTrigger>
            <TabsTrigger value="videos">{dictionary.tabs.videos}</TabsTrigger>
          </TabsList>
        </div>

        {/* <TabsContent value="reviews" className="mt-4">
        <Reviews tmdbId={id} mediaType="TV_SHOW" />
      </TabsContent>

      <TabsContent value="where_to_watch">
        <WhereToWatch id={id} variant="tv" language={language} />
      </TabsContent>

     


      

      */}

        <TabsContent value="episodes" className="mt-4">
          <SeasonEpisodes episodes={season.episodes} />
        </TabsContent>

        <TabsContent value="credits" className="mt-4">
          <SeasonCredits
            seasonNumber={seasonNumber}
            seriesId={seriesId}
            language={lang}
          />
        </TabsContent>

        <TabsContent value="images" className="mt-4">
          <SeasonImages seasonNumber={seasonNumber} seriesId={seriesId} />
        </TabsContent>

        <TabsContent value="videos" className="mt-4">
          <SeasonVideos seasonNumber={seasonNumber} seriesId={seriesId} />
        </TabsContent>
      </Tabs>
    </section>
  )
}
