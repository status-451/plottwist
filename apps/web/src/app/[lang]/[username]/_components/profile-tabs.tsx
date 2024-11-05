'use client'

import { List, Star } from 'lucide-react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@plotwist/ui/components/ui/tabs'
import { ProfileLists } from './profile-lists'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useLanguage } from '@/context/language'
import { useCallback } from 'react'
import { GetUsersUsername200User } from '@/api/endpoints.schemas'

type ProfileTabsProps = {
  user: GetUsersUsername200User
}

export const ProfileTabs = ({ user }: ProfileTabsProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { dictionary } = useLanguage()

  const tab = searchParams.get('tab') ?? 'lists'

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  function handleTabChange(tab: string) {
    router.push(pathname + '?' + createQueryString('tab', tab), {
      scroll: false,
    })
  }

  return (
    <Tabs defaultValue="lists" value={tab} className="w-full">
      <div className="md:m-none p-none -mx-4 max-w-[100vw] overflow-x-scroll px-4 scrollbar-hide">
        <TabsList>
          <TabsTrigger onClick={() => handleTabChange('lists')} value="lists">
            <List className="mr-1" width={12} height={12} />
            {dictionary.profile.lists}
          </TabsTrigger>

          <TabsTrigger
            onClick={() => handleTabChange('reviews')}
            value="reviews"
            disabled
          >
            <Star className="mr-1" width={12} height={12} />
            {dictionary.profile.reviews}
          </TabsTrigger>

          {/* <TabsTrigger
            onClick={() => handleTabChange('watched')}
            value="watched"
          >
            <Eye className="mr-1" width={12} height={12} />
            Assistidos
          </TabsTrigger> */}

          {/* {mode === 'EDIT' && (
            <TabsTrigger
              onClick={() => handleTabChange('recommendations')}
              value="recommendations"
            >
              <Forward className="mr-1" width={12} height={12} />
              {dictionary.profile.recommendations}
            </TabsTrigger>
          )} */}

          {/* <TabsTrigger
            onClick={() => handleTabChange('achievements')}
            value="achievements"
          >
            <Award className="mr-1" width={12} height={12} />
            {dictionary.profile.achievements}
          </TabsTrigger> */}

          {/* <TabsTrigger
            onClick={() => handleTabChange('communities')}
            value="communities"
            disabled
          >
            <Users className="mr-1" width={12} height={12} />

            {dictionary.profile.communities}
          </TabsTrigger> */}
        </TabsList>
      </div>

      {/* <TabsContent value="reviews" className="mt-4">
        <ProfileReviews profile={profile} />
      </TabsContent> */}

      <TabsContent value="lists" className="mt-4">
        <ProfileLists userId={user.id} />
      </TabsContent>

      {/* {mode === 'EDIT' && (
        <TabsContent value="recommendations" className="mt-4">
          <ProfileRecommendations userId={profile.id} />
        </TabsContent>
      )} */}

      {/* 
      <TabsContent value="achievements" className="mt-4">
        <ProfileAchievements dictionary={dictionary} />
      </TabsContent> */}
    </Tabs>
  )
}
