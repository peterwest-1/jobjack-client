import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any };
};

export type EntryFlat = {
  __typename?: 'EntryFlat';
  createdAt: Scalars['DateTime']['output'];
  extension?: Maybe<Scalars['String']['output']>;
  isDirectory: Scalars['Boolean']['output'];
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  permissions?: Maybe<Scalars['String']['output']>;
  size: Scalars['Float']['output'];
};

export type EntryTree = {
  __typename?: 'EntryTree';
  children?: Maybe<Array<EntryTree>>;
  createdAt: Scalars['DateTime']['output'];
  extension?: Maybe<Scalars['String']['output']>;
  hasChildren?: Maybe<Scalars['Boolean']['output']>;
  isDirectory: Scalars['Boolean']['output'];
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  permissions?: Maybe<Scalars['String']['output']>;
  size: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  entryFlat: Array<EntryFlat>;
  entryTree: EntryTree;
};

export type QueryEntryFlatArgs = {
  pageOffset: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
};

export type QueryEntryTreeArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

export type EntryFlatResponseFragment = {
  __typename?: 'EntryFlat';
  name: string;
  link: string;
  path: string;
  size: number;
  extension?: string | null;
  isDirectory: boolean;
  createdAt: any;
  permissions?: string | null;
};

export type EntryTreeResponseFragment = {
  __typename?: 'EntryTree';
  name: string;
  link: string;
  path: string;
  size: number;
  extension?: string | null;
  isDirectory: boolean;
  createdAt: any;
  permissions?: string | null;
};

export type EntryFlatQueryVariables = Exact<{
  pageOffset: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
}>;

export type EntryFlatQuery = {
  __typename?: 'Query';
  entryFlat: Array<{
    __typename?: 'EntryFlat';
    name: string;
    link: string;
    path: string;
    size: number;
    extension?: string | null;
    isDirectory: boolean;
    createdAt: any;
    permissions?: string | null;
  }>;
};

export type EntryTreeQueryVariables = Exact<{
  path?: InputMaybe<Scalars['String']['input']>;
}>;

export type EntryTreeQuery = {
  __typename?: 'Query';
  entryTree: {
    __typename?: 'EntryTree';
    name: string;
    link: string;
    path: string;
    size: number;
    extension?: string | null;
    isDirectory: boolean;
    createdAt: any;
    permissions?: string | null;
    children?: Array<{
      __typename?: 'EntryTree';
      name: string;
      link: string;
      path: string;
      size: number;
      extension?: string | null;
      isDirectory: boolean;
      createdAt: any;
      permissions?: string | null;
    }> | null;
  };
};

export const EntryFlatResponseFragmentDoc = gql`
  fragment EntryFlatResponse on EntryFlat {
    name
    link
    path
    size
    extension
    isDirectory
    createdAt
    permissions
  }
`;
export const EntryTreeResponseFragmentDoc = gql`
  fragment EntryTreeResponse on EntryTree {
    name
    link
    path
    size
    extension
    isDirectory
    createdAt
    permissions
  }
`;
export const EntryFlatDocument = gql`
  query EntryFlat($pageOffset: Int!, $pageSize: Int!, $path: String) {
    entryFlat(pageOffset: $pageOffset, pageSize: $pageSize, path: $path) {
      ...EntryFlatResponse
    }
  }
  ${EntryFlatResponseFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class EntryFlatGQL extends Apollo.Query<
  EntryFlatQuery,
  EntryFlatQueryVariables
> {
  override document = EntryFlatDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const EntryTreeDocument = gql`
  query EntryTree($path: String) {
    entryTree(path: $path) {
      ...EntryTreeResponse
      children {
        ...EntryTreeResponse
      }
    }
  }
  ${EntryTreeResponseFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class EntryTreeGQL extends Apollo.Query<
  EntryTreeQuery,
  EntryTreeQueryVariables
> {
  override document = EntryTreeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
