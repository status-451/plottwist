import { tmdb } from '@/services/tmdb'
import { CreditCard } from './credit-card'
import type { Language } from '@/types/languages'
import { getDictionary } from '@/utils/dictionaries'
import { getDepartamentLabel } from '@/utils/tmdb/department'

type SeasonCreditsProps = {
  seriesId: number
  seasonNumber: number
  language: Language
}

export const SeasonCredits = async ({
  seasonNumber,
  seriesId,
  language,
}: SeasonCreditsProps) => {
  const dictionary = await getDictionary(language)
  const { cast, crew } = await tmdb.season.credits(seriesId, seasonNumber)

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      data-testid="credits"
    >
      <section className="">
        <h5 className="text-lg font-medium">{dictionary.credits.cast}</h5>

        <ul className="">
          {cast.map(
            ({
              profile_path: profilePath,
              name,
              character,
              credit_id: creditId,
              id,
            }) => (
              <CreditCard
                key={creditId}
                imagePath={profilePath}
                name={name}
                role={character}
                href={`/${language}/people/${id}`}
              />
            )
          )}
        </ul>
      </section>

      <section className="">
        <h5 className="text-lg font-medium">{dictionary.credits.crew}</h5>

        <ul className="">
          {crew.map(
            ({
              profile_path: profilePath,
              name,
              department,
              credit_id: creditId,
              id,
            }) => (
              <CreditCard
                key={creditId}
                imagePath={profilePath}
                name={name}
                role={getDepartamentLabel(dictionary, department)}
                href={`/${language}/people/${id}`}
              />
            )
          )}
        </ul>
      </section>
    </div>
  )
}
