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

export type EntryData = {
  __typename?: 'EntryData';
  children: Array<EntryData>;
  createdAt: Scalars['DateTime']['output'];
  extension: Scalars['String']['output'];
  hasChildren: Scalars['Boolean']['output'];
  isDirectory: Scalars['Boolean']['output'];
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  entry: EntryData;
};

export type QueryEntryArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

export type EntryResponseFragment = {
  __typename?: 'EntryData';
  name: string;
  link: string;
  path: string;
  size: number;
  extension: string;
  isDirectory: boolean;
  createdAt: any;
};

export type EntryQueryVariables = Exact<{
  path?: InputMaybe<Scalars['String']['input']>;
}>;

export type EntryQuery = {
  __typename?: 'Query';
  entry: {
    __typename?: 'EntryData';
    name: string;
    link: string;
    path: string;
    size: number;
    extension: string;
    isDirectory: boolean;
    createdAt: any;
    children: Array<{
      __typename?: 'EntryData';
      name: string;
      link: string;
      path: string;
      size: number;
      extension: string;
      isDirectory: boolean;
      createdAt: any;
    }>;
  };
};

export const EntryResponseFragmentDoc = gql`
  fragment EntryResponse on EntryData {
    name
    link
    path
    size
    extension
    isDirectory
    createdAt
  }
`;
export const EntryDocument = gql`
  query Entry($path: String) {
    entry(path: $path) {
      ...EntryResponse
      children {
        ...EntryResponse
      }
    }
  }
  ${EntryResponseFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class EntryGQL extends Apollo.Query<EntryQuery, EntryQueryVariables> {
  override document = EntryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
