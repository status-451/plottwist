import { type Language, tmdb } from '@/services/tmdb'
import { getDictionary } from '@/utils/dictionaries'
import { getDepartamentLabel } from '@/utils/tmdb/department'
import { CreditCard } from './credit-card'

type BaseProps = {
  id: number
  language: Language
}

type MovieOrTvCredits = {
  variant: 'movie' | 'tv'
} & BaseProps

type SeasonCredits = {
  variant: 'season'
  season: number
} & BaseProps

export type CreditsProps = MovieOrTvCredits | SeasonCredits

export async function Credits(props: CreditsProps) {
  const { variant, id, language } = props

  const getCredits = async () => {
    if (variant === 'season') {
      const { season } = props
      return await tmdb.season.credits(id, season)
    }

    return await tmdb.credits(variant, id, language)
  }

  const { cast, crew } = await getCredits()
  const dictionary = await getDictionary(language)

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      data-testid="credits"
    >
      <section>
        <h5 className="text-lg font-medium">{dictionary.credits.cast}</h5>
        <ul>
          {cast.map(({ profile_path, name, character, credit_id, id }) => (
            <CreditCard
              key={credit_id}
              imagePath={profile_path}
              name={name}
              role={character}
              href={`/${language}/people/${id}`}
            />
          ))}
        </ul>
      </section>

      <section>
        <h5 className="text-lg font-medium">{dictionary.credits.crew}</h5>
        <ul>
          {crew.map(({ profile_path, name, department, credit_id, id }) => (
            <CreditCard
              key={credit_id}
              imagePath={profile_path}
              name={name}
              role={getDepartamentLabel(dictionary, department)}
              href={`/${language}/people/${id}`}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}
