/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Plotwist
 * OpenAPI spec version: 0.1.0
 */
import {
  useMutation,
  useQuery,
  useSuspenseQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult
} from '@tanstack/react-query'
import type {
  GetListItemsByListId200Item,
  GetListItemsByListIdParams,
  PostListItem201,
  PostListItemBody,
  UpdateListItemsPositionsBody
} from './endpoints.schemas'
import { axiosInstance } from '../services/axios-instance';




/**
 * Create list item
 */
export const postListItem = (
    postListItemBody: PostListItemBody,
 ) => {
      
      
      return axiosInstance<PostListItem201>(
      {url: `/list-item`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: postListItemBody
    },
      );
    }
  


export const getPostListItemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postListItem>>, TError,{data: PostListItemBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postListItem>>, TError,{data: PostListItemBody}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postListItem>>, {data: PostListItemBody}> = (props) => {
          const {data} = props ?? {};

          return  postListItem(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostListItemMutationResult = NonNullable<Awaited<ReturnType<typeof postListItem>>>
    export type PostListItemMutationBody = PostListItemBody
    export type PostListItemMutationError = unknown

    export const usePostListItem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postListItem>>, TError,{data: PostListItemBody}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof postListItem>>,
        TError,
        {data: PostListItemBody},
        TContext
      > => {

      const mutationOptions = getPostListItemMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Create list item
 */
export const getListItemsByListId = (
    listId: string,
    params?: GetListItemsByListIdParams,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetListItemsByListId200Item[]>(
      {url: `/list-items/by/${listId}`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getGetListItemsByListIdQueryKey = (listId: string,
    params?: GetListItemsByListIdParams,) => {
    return [`/list-items/by/${listId}`, ...(params ? [params]: [])] as const;
    }

    
export const getGetListItemsByListIdQueryOptions = <TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(listId: string,
    params?: GetListItemsByListIdParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetListItemsByListIdQueryKey(listId,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getListItemsByListId>>> = ({ signal }) => getListItemsByListId(listId,params, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(listId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData> & { queryKey: QueryKey }
}

export type GetListItemsByListIdQueryResult = NonNullable<Awaited<ReturnType<typeof getListItemsByListId>>>
export type GetListItemsByListIdQueryError = unknown


export function useGetListItemsByListId<TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(
 listId: string,
    params: undefined |  GetListItemsByListIdParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getListItemsByListId>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListItemsByListId<TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(
 listId: string,
    params?: GetListItemsByListIdParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getListItemsByListId>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListItemsByListId<TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(
 listId: string,
    params?: GetListItemsByListIdParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetListItemsByListId<TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(
 listId: string,
    params?: GetListItemsByListIdParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetListItemsByListIdQueryOptions(listId,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetListItemsByListIdSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(listId: string,
    params?: GetListItemsByListIdParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetListItemsByListIdQueryKey(listId,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getListItemsByListId>>> = ({ signal }) => getListItemsByListId(listId,params, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(listId), ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData> & { queryKey: QueryKey }
}

export type GetListItemsByListIdSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getListItemsByListId>>>
export type GetListItemsByListIdSuspenseQueryError = unknown


export function useGetListItemsByListIdSuspense<TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(
 listId: string,
    params: undefined |  GetListItemsByListIdParams, options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListItemsByListIdSuspense<TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(
 listId: string,
    params?: GetListItemsByListIdParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetListItemsByListIdSuspense<TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(
 listId: string,
    params?: GetListItemsByListIdParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetListItemsByListIdSuspense<TData = Awaited<ReturnType<typeof getListItemsByListId>>, TError = unknown>(
 listId: string,
    params?: GetListItemsByListIdParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getListItemsByListId>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetListItemsByListIdSuspenseQueryOptions(listId,params,options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Delete list item
 */
export const deleteListItemId = (
    id: string,
 ) => {
      
      
      return axiosInstance<void>(
      {url: `/list-item/${id}`, method: 'DELETE'
    },
      );
    }
  


export const getDeleteListItemIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteListItemId>>, TError,{id: string}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteListItemId>>, TError,{id: string}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteListItemId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteListItemId(id,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteListItemIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteListItemId>>>
    
    export type DeleteListItemIdMutationError = unknown

    export const useDeleteListItemId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteListItemId>>, TError,{id: string}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof deleteListItemId>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteListItemIdMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Update list items position
 */
export const updateListItemsPositions = (
    updateListItemsPositionsBody: UpdateListItemsPositionsBody,
 ) => {
      
      
      return axiosInstance<void>(
      {url: `/list-items`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateListItemsPositionsBody
    },
      );
    }
  


export const getUpdateListItemsPositionsMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateListItemsPositions>>, TError,{data: UpdateListItemsPositionsBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof updateListItemsPositions>>, TError,{data: UpdateListItemsPositionsBody}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateListItemsPositions>>, {data: UpdateListItemsPositionsBody}> = (props) => {
          const {data} = props ?? {};

          return  updateListItemsPositions(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdateListItemsPositionsMutationResult = NonNullable<Awaited<ReturnType<typeof updateListItemsPositions>>>
    export type UpdateListItemsPositionsMutationBody = UpdateListItemsPositionsBody
    export type UpdateListItemsPositionsMutationError = unknown

    export const useUpdateListItemsPositions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateListItemsPositions>>, TError,{data: UpdateListItemsPositionsBody}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof updateListItemsPositions>>,
        TError,
        {data: UpdateListItemsPositionsBody},
        TContext
      > => {

      const mutationOptions = getUpdateListItemsPositionsMutationOptions(options);

      return useMutation(mutationOptions);
    }
    