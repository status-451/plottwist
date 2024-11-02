/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Event booster
 * OpenAPI spec version: 0.1.0
 */
/**
 * Invalid email or password.
 */
export type PostLogin400 = {
  message: string;
};

/**
 * @nullable
 */
export type PostLogin200UserSubscriptionType = typeof PostLogin200UserSubscriptionType[keyof typeof PostLogin200UserSubscriptionType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostLogin200UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type PostLogin200User = {
  /** @nullable */
  bannerPath: string | null;
  /** @nullable */
  createdAt: string | null;
  email: string;
  id: string;
  /** @nullable */
  imagePath: string | null;
  /** @nullable */
  subscriptionType: PostLogin200UserSubscriptionType;
  username: string;
};

export type PostLogin200 = {
  token: string;
  user: PostLogin200User;
};

export type PostLoginBody = {
  email: string;
  /** @minLength 8 */
  password?: string;
};

export type PostCreateList201ListVisibility = typeof PostCreateList201ListVisibility[keyof typeof PostCreateList201ListVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostCreateList201ListVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PostCreateList201List = {
  /** @nullable */
  coverPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  id: string;
  title: string;
  userId: string;
  visibility: PostCreateList201ListVisibility;
};

/**
 * List created.
 */
export type PostCreateList201 = {
  list: PostCreateList201List;
};

export type PostCreateListBodyVisibility = typeof PostCreateListBodyVisibility[keyof typeof PostCreateListBodyVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostCreateListBodyVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PostCreateListBody = {
  /** @nullable */
  description?: string | null;
  title: string;
  visibility: PostCreateListBodyVisibility;
};

/**
 * Email is already registered.
 */
export type GetUsersCheckEmail409 = {
  message: string;
};

export type GetUsersCheckEmail200 = {
  available: boolean;
};

export type GetUsersCheckEmailParams = {
email: string;
};

/**
 * Username is already registered.
 */
export type GetUsersAvailableUsername409 = {
  message: string;
};

export type GetUsersAvailableUsername200 = {
  available: boolean;
};

export type GetUsersAvailableUsernameParams = {
username: string;
};

/**
 * Fail to hash password.
 */
export type PostUsersCreate500 = {
  message: string;
};

/**
 * Email or username is already registered.
 */
export type PostUsersCreate409 = {
  message: string;
};

/**
 * @nullable
 */
export type PostUsersCreate201UserSubscriptionType = typeof PostUsersCreate201UserSubscriptionType[keyof typeof PostUsersCreate201UserSubscriptionType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostUsersCreate201UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type PostUsersCreate201User = {
  /** @nullable */
  bannerPath?: string | null;
  /** @nullable */
  createdAt?: string | null;
  email: string;
  id?: string;
  /** @nullable */
  imagePath?: string | null;
  /** @nullable */
  subscriptionType?: PostUsersCreate201UserSubscriptionType;
  username: string;
};

/**
 * User created.
 */
export type PostUsersCreate201 = {
  user: PostUsersCreate201User;
};

export type PostUsersCreateBody = {
  email: string;
  /** @minLength 8 */
  password: string;
  /** @minLength 3 */
  username: string;
};

