'use client'

import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

import { useLanguage } from '@/context/language'
import { useSession } from '@/context/session'

import type { ReviewItemProps } from './review-item'
import { useDeleteLikeId, usePostLike } from '@/api/like'
import { APP_QUERY_CLIENT } from '@/context/app'
import { getGetReviewsQueryKey } from '@/api/reviews'

type ReviewItemActionsProps = {
  openReplyForm: boolean
  setOpenReplyForm: (param: boolean) => void
} & Pick<ReviewItemProps, 'review'>

type ReviewItemActionProps = {
  disabled?: boolean
  active?: boolean
} & ComponentProps<'div'>

const ReviewItemAction = ({
  disabled,
  active,
  className,
  ...props
}: ReviewItemActionProps) => {
  return (
    <span
      className={cn(
        'cursor-pointer text-xs text-muted-foreground underline-offset-1 hover:underline',
        disabled && 'pointer-events-none animate-pulse opacity-50',
        active && 'font-medium',
        className
      )}
      {...props}
    >
      {props.children}
    </span>
  )
}

export const ReviewItemActions = ({
  openReplyForm,
  setOpenReplyForm,
  review,
}: ReviewItemActionsProps) => {
  const { user } = useSession()
  const { dictionary, language } = useLanguage()

  const createLike = usePostLike()
  const deleteLike = useDeleteLikeId()

  if (!user) return null

  return (
    <div>
      <div className="flex items-center space-x-2">
        <ReviewItemAction
          active={Boolean(review.userLike)}
          onClick={() => {
            if (review.userLike) {
              return deleteLike.mutate(
                { id: review.userLike.id },
                {
                  onSuccess: () => {
                    APP_QUERY_CLIENT.invalidateQueries({
                      queryKey: getGetReviewsQueryKey({
                        language: language,
                        mediaType: review.mediaType,
                        tmdbId: String(review.tmdbId),
                      }),
                    })
                  },
                }
              )
            }

            createLike.mutate(
              {
                data: { entityId: review.id, entityType: 'REVIEW' },
              },
              {
                onSuccess: () => {
                  APP_QUERY_CLIENT.invalidateQueries({
                    queryKey: getGetReviewsQueryKey({
                      language: language,
                      mediaType: review.mediaType,
                      tmdbId: String(review.tmdbId),
                    }),
                  })
                },
              }
            )
          }}
        >
          {dictionary.review_item_actions.like}
        </ReviewItemAction>

        <span className="h-1 w-1 rounded-full bg-muted-foreground" />

        <ReviewItemAction
          onClick={() => setOpenReplyForm(!openReplyForm)}
          disabled={true}
        >
          {dictionary.review_item_actions.reply}
        </ReviewItemAction>
      </div>
    </div>
  )
}
