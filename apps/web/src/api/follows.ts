/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Plotwist
 * OpenAPI spec version: 0.1.0
 */
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useSuspenseQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseInfiniteQueryResult,
  DefinedUseQueryResult,
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult
} from '@tanstack/react-query'
import type {
  DeleteFollowBody,
  GetFollow200,
  GetFollowParams,
  GetFollowers200,
  GetFollowersParams,
  PostFollowBody
} from './endpoints.schemas'
import { axiosInstance } from '../services/axios-instance';




/**
 * Follow user
 */
export const postFollow = (
    postFollowBody: PostFollowBody,
 ) => {
      
      
      return axiosInstance<void>(
      {url: `/follow`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: postFollowBody
    },
      );
    }
  


export const getPostFollowMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postFollow>>, TError,{data: PostFollowBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postFollow>>, TError,{data: PostFollowBody}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postFollow>>, {data: PostFollowBody}> = (props) => {
          const {data} = props ?? {};

          return  postFollow(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostFollowMutationResult = NonNullable<Awaited<ReturnType<typeof postFollow>>>
    export type PostFollowMutationBody = PostFollowBody
    export type PostFollowMutationError = unknown

    export const usePostFollow = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postFollow>>, TError,{data: PostFollowBody}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof postFollow>>,
        TError,
        {data: PostFollowBody},
        TContext
      > => {

      const mutationOptions = getPostFollowMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Get follow
 */
export const getFollow = (
    params: GetFollowParams,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetFollow200>(
      {url: `/follow`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getGetFollowQueryKey = (params: GetFollowParams,) => {
    return [`/follow`, ...(params ? [params]: [])] as const;
    }

    
export const getGetFollowQueryOptions = <TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(params: GetFollowParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetFollowQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getFollow>>> = ({ signal }) => getFollow(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData> & { queryKey: QueryKey }
}

export type GetFollowQueryResult = NonNullable<Awaited<ReturnType<typeof getFollow>>>
export type GetFollowQueryError = unknown


export function useGetFollow<TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(
 params: GetFollowParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollow>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetFollow<TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(
 params: GetFollowParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollow>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetFollow<TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(
 params: GetFollowParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetFollow<TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(
 params: GetFollowParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetFollowQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetFollowSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(params: GetFollowParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetFollowQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getFollow>>> = ({ signal }) => getFollow(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData> & { queryKey: QueryKey }
}

export type GetFollowSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getFollow>>>
export type GetFollowSuspenseQueryError = unknown


export function useGetFollowSuspense<TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(
 params: GetFollowParams, options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetFollowSuspense<TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(
 params: GetFollowParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetFollowSuspense<TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(
 params: GetFollowParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetFollowSuspense<TData = Awaited<ReturnType<typeof getFollow>>, TError = unknown>(
 params: GetFollowParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollow>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetFollowSuspenseQueryOptions(params,options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Delete follow
 */
export const deleteFollow = (
    deleteFollowBody: DeleteFollowBody,
 ) => {
      
      
      return axiosInstance<void>(
      {url: `/follow`, method: 'DELETE',
      headers: {'Content-Type': 'application/json', },
      data: deleteFollowBody
    },
      );
    }
  


export const getDeleteFollowMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteFollow>>, TError,{data: DeleteFollowBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteFollow>>, TError,{data: DeleteFollowBody}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteFollow>>, {data: DeleteFollowBody}> = (props) => {
          const {data} = props ?? {};

          return  deleteFollow(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteFollowMutationResult = NonNullable<Awaited<ReturnType<typeof deleteFollow>>>
    export type DeleteFollowMutationBody = DeleteFollowBody
    export type DeleteFollowMutationError = unknown

    export const useDeleteFollow = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteFollow>>, TError,{data: DeleteFollowBody}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof deleteFollow>>,
        TError,
        {data: DeleteFollowBody},
        TContext
      > => {

      const mutationOptions = getDeleteFollowMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Get followers
 */
export const getFollowers = (
    params?: GetFollowersParams,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetFollowers200>(
      {url: `/followers`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getGetFollowersQueryKey = (params?: GetFollowersParams,) => {
    return [`/followers`, ...(params ? [params]: [])] as const;
    }

    
export const getGetFollowersInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>, TError = unknown>(params?: GetFollowersParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetFollowersQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getFollowers>>> = ({ signal }) => getFollowers(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData> & { queryKey: QueryKey }
}

export type GetFollowersInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getFollowers>>>
export type GetFollowersInfiniteQueryError = unknown


export function useGetFollowersInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>, TError = unknown>(
 params: undefined |  GetFollowersParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowers>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetFollowersInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>, TError = unknown>(
 params?: GetFollowersParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowers>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetFollowersInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>, TError = unknown>(
 params?: GetFollowersParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>, }

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetFollowersInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>, TError = unknown>(
 params?: GetFollowersParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>, }

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetFollowersInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



