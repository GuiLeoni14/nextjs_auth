import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
    JSON: any;
    Upload: any;
};

export type Autor = {
    __typename?: 'Autor';
    createdAt?: Maybe<Scalars['DateTime']>;
    name: Scalars['String'];
    publishedAt?: Maybe<Scalars['DateTime']>;
    slug: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AutorEntity = {
    __typename?: 'AutorEntity';
    attributes?: Maybe<Autor>;
    id?: Maybe<Scalars['ID']>;
};

export type AutorEntityResponse = {
    __typename?: 'AutorEntityResponse';
    data?: Maybe<AutorEntity>;
};

export type AutorEntityResponseCollection = {
    __typename?: 'AutorEntityResponseCollection';
    data: Array<AutorEntity>;
    meta: ResponseCollectionMeta;
};

export type AutorFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<AutorFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<AutorFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<AutorFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    slug?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AutorInput = {
    name?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    contains?: InputMaybe<Scalars['Boolean']>;
    containsi?: InputMaybe<Scalars['Boolean']>;
    endsWith?: InputMaybe<Scalars['Boolean']>;
    eq?: InputMaybe<Scalars['Boolean']>;
    gt?: InputMaybe<Scalars['Boolean']>;
    gte?: InputMaybe<Scalars['Boolean']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    lt?: InputMaybe<Scalars['Boolean']>;
    lte?: InputMaybe<Scalars['Boolean']>;
    ne?: InputMaybe<Scalars['Boolean']>;
    not?: InputMaybe<BooleanFilterInput>;
    notContains?: InputMaybe<Scalars['Boolean']>;
    notContainsi?: InputMaybe<Scalars['Boolean']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
    __typename?: 'Category';
    cover: UploadFileEntityResponse;
    createdAt?: Maybe<Scalars['DateTime']>;
    name: Scalars['String'];
    publishedAt?: Maybe<Scalars['DateTime']>;
    slug: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryEntity = {
    __typename?: 'CategoryEntity';
    attributes?: Maybe<Category>;
    id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
    __typename?: 'CategoryEntityResponse';
    data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
    __typename?: 'CategoryEntityResponseCollection';
    data: Array<CategoryEntity>;
    meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<CategoryFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    slug?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
    cover?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type ComponentFooterAuthor = {
    __typename?: 'ComponentFooterAuthor';
    description: Scalars['String'];
    id: Scalars['ID'];
    title: Scalars['String'];
};

export type ComponentFooterAuthorInput = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    title?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuMenuLink = {
    __typename?: 'ComponentMenuMenuLink';
    id: Scalars['ID'];
    link: Scalars['String'];
    newTab: Scalars['Boolean'];
    text: Scalars['String'];
};

export type ComponentMenuMenuLinkFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkFiltersInput>>>;
    link?: InputMaybe<StringFilterInput>;
    newTab?: InputMaybe<BooleanFilterInput>;
    not?: InputMaybe<ComponentMenuMenuLinkFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkFiltersInput>>>;
    text?: InputMaybe<StringFilterInput>;
};

export type ComponentMenuMenuLinkInput = {
    id?: InputMaybe<Scalars['ID']>;
    link?: InputMaybe<Scalars['String']>;
    newTab?: InputMaybe<Scalars['Boolean']>;
    text?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    contains?: InputMaybe<Scalars['DateTime']>;
    containsi?: InputMaybe<Scalars['DateTime']>;
    endsWith?: InputMaybe<Scalars['DateTime']>;
    eq?: InputMaybe<Scalars['DateTime']>;
    gt?: InputMaybe<Scalars['DateTime']>;
    gte?: InputMaybe<Scalars['DateTime']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    lt?: InputMaybe<Scalars['DateTime']>;
    lte?: InputMaybe<Scalars['DateTime']>;
    ne?: InputMaybe<Scalars['DateTime']>;
    not?: InputMaybe<DateTimeFilterInput>;
    notContains?: InputMaybe<Scalars['DateTime']>;
    notContainsi?: InputMaybe<Scalars['DateTime']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
    alternativeText?: InputMaybe<Scalars['String']>;
    caption?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    contains?: InputMaybe<Scalars['Float']>;
    containsi?: InputMaybe<Scalars['Float']>;
    endsWith?: InputMaybe<Scalars['Float']>;
    eq?: InputMaybe<Scalars['Float']>;
    gt?: InputMaybe<Scalars['Float']>;
    gte?: InputMaybe<Scalars['Float']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    lt?: InputMaybe<Scalars['Float']>;
    lte?: InputMaybe<Scalars['Float']>;
    ne?: InputMaybe<Scalars['Float']>;
    not?: InputMaybe<FloatFilterInput>;
    notContains?: InputMaybe<Scalars['Float']>;
    notContainsi?: InputMaybe<Scalars['Float']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
    __typename?: 'Footer';
    Author: ComponentFooterAuthor;
    createdAt?: Maybe<Scalars['DateTime']>;
    languagesUsing: Scalars['String'];
    lastText: Scalars['String'];
    publishedAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FooterEntity = {
    __typename?: 'FooterEntity';
    attributes?: Maybe<Footer>;
    id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
    __typename?: 'FooterEntityResponse';
    data?: Maybe<FooterEntity>;
};

export type FooterInput = {
    Author?: InputMaybe<ComponentFooterAuthorInput>;
    languagesUsing?: InputMaybe<Scalars['String']>;
    lastText?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GenericMorph =
    | Autor
    | Category
    | ComponentFooterAuthor
    | ComponentMenuMenuLink
    | Footer
    | I18NLocale
    | Post
    | Setting
    | Tag
    | UploadFile
    | UsersPermissionsPermission
    | UsersPermissionsRole
    | UsersPermissionsUser;

export type I18NLocale = {
    __typename?: 'I18NLocale';
    code?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    name?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
    __typename?: 'I18NLocaleEntity';
    attributes?: Maybe<I18NLocale>;
    id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
    __typename?: 'I18NLocaleEntityResponse';
    data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
    __typename?: 'I18NLocaleEntityResponseCollection';
    data: Array<I18NLocaleEntity>;
    meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
    code?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<I18NLocaleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    contains?: InputMaybe<Scalars['ID']>;
    containsi?: InputMaybe<Scalars['ID']>;
    endsWith?: InputMaybe<Scalars['ID']>;
    eq?: InputMaybe<Scalars['ID']>;
    gt?: InputMaybe<Scalars['ID']>;
    gte?: InputMaybe<Scalars['ID']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    lt?: InputMaybe<Scalars['ID']>;
    lte?: InputMaybe<Scalars['ID']>;
    ne?: InputMaybe<Scalars['ID']>;
    not?: InputMaybe<IdFilterInput>;
    notContains?: InputMaybe<Scalars['ID']>;
    notContainsi?: InputMaybe<Scalars['ID']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    contains?: InputMaybe<Scalars['Int']>;
    containsi?: InputMaybe<Scalars['Int']>;
    endsWith?: InputMaybe<Scalars['Int']>;
    eq?: InputMaybe<Scalars['Int']>;
    gt?: InputMaybe<Scalars['Int']>;
    gte?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    lt?: InputMaybe<Scalars['Int']>;
    lte?: InputMaybe<Scalars['Int']>;
    ne?: InputMaybe<Scalars['Int']>;
    not?: InputMaybe<IntFilterInput>;
    notContains?: InputMaybe<Scalars['Int']>;
    notContainsi?: InputMaybe<Scalars['Int']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    contains?: InputMaybe<Scalars['JSON']>;
    containsi?: InputMaybe<Scalars['JSON']>;
    endsWith?: InputMaybe<Scalars['JSON']>;
    eq?: InputMaybe<Scalars['JSON']>;
    gt?: InputMaybe<Scalars['JSON']>;
    gte?: InputMaybe<Scalars['JSON']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    lt?: InputMaybe<Scalars['JSON']>;
    lte?: InputMaybe<Scalars['JSON']>;
    ne?: InputMaybe<Scalars['JSON']>;
    not?: InputMaybe<JsonFilterInput>;
    notContains?: InputMaybe<Scalars['JSON']>;
    notContainsi?: InputMaybe<Scalars['JSON']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createAutor?: Maybe<AutorEntityResponse>;
    createCategory?: Maybe<CategoryEntityResponse>;
    createPost?: Maybe<PostEntityResponse>;
    createTag?: Maybe<TagEntityResponse>;
    createUploadFile?: Maybe<UploadFileEntityResponse>;
    /** Create a new role */
    createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
    /** Create a new user */
    createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    deleteAutor?: Maybe<AutorEntityResponse>;
    deleteCategory?: Maybe<CategoryEntityResponse>;
    deleteFooter?: Maybe<FooterEntityResponse>;
    deletePost?: Maybe<PostEntityResponse>;
    deleteSetting?: Maybe<SettingEntityResponse>;
    deleteTag?: Maybe<TagEntityResponse>;
    deleteUploadFile?: Maybe<UploadFileEntityResponse>;
    /** Delete an existing role */
    deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
    /** Update an existing user */
    deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    /** Confirm an email users email address */
    emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
    /** Request a reset password token */
    forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
    login: UsersPermissionsLoginPayload;
    multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
    /** Register a user */
    register: UsersPermissionsLoginPayload;
    removeFile?: Maybe<UploadFileEntityResponse>;
    /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
    resetPassword?: Maybe<UsersPermissionsLoginPayload>;
    updateAutor?: Maybe<AutorEntityResponse>;
    updateCategory?: Maybe<CategoryEntityResponse>;
    updateFileInfo: UploadFileEntityResponse;
    updateFooter?: Maybe<FooterEntityResponse>;
    updatePost?: Maybe<PostEntityResponse>;
    updateSetting?: Maybe<SettingEntityResponse>;
    updateTag?: Maybe<TagEntityResponse>;
    updateUploadFile?: Maybe<UploadFileEntityResponse>;
    /** Update an existing role */
    updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
    /** Update an existing user */
    updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    upload: UploadFileEntityResponse;
};

export type MutationCreateAutorArgs = {
    data: AutorInput;
};

export type MutationCreateCategoryArgs = {
    data: CategoryInput;
};

export type MutationCreatePostArgs = {
    data: PostInput;
};

export type MutationCreateTagArgs = {
    data: TagInput;
};

export type MutationCreateUploadFileArgs = {
    data: UploadFileInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
    data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
    data: UsersPermissionsUserInput;
};

export type MutationDeleteAutorArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteCategoryArgs = {
    id: Scalars['ID'];
};

export type MutationDeletePostArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteTagArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
    id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
    confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
    email: Scalars['String'];
};

export type MutationLoginArgs = {
    input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
    field?: InputMaybe<Scalars['String']>;
    files: Array<InputMaybe<Scalars['Upload']>>;
    ref?: InputMaybe<Scalars['String']>;
    refId?: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
    input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
    id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
    code: Scalars['String'];
    password: Scalars['String'];
    passwordConfirmation: Scalars['String'];
};

export type MutationUpdateAutorArgs = {
    data: AutorInput;
    id: Scalars['ID'];
};

export type MutationUpdateCategoryArgs = {
    data: CategoryInput;
    id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
    id: Scalars['ID'];
    info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateFooterArgs = {
    data: FooterInput;
};

export type MutationUpdatePostArgs = {
    data: PostInput;
    id: Scalars['ID'];
};

export type MutationUpdateSettingArgs = {
    data: SettingInput;
};

export type MutationUpdateTagArgs = {
    data: TagInput;
    id: Scalars['ID'];
};

export type MutationUpdateUploadFileArgs = {
    data: UploadFileInput;
    id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
    data: UsersPermissionsRoleInput;
    id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
    data: UsersPermissionsUserInput;
    id: Scalars['ID'];
};

export type MutationUploadArgs = {
    field?: InputMaybe<Scalars['String']>;
    file: Scalars['Upload'];
    info?: InputMaybe<FileInfoInput>;
    ref?: InputMaybe<Scalars['String']>;
    refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
    __typename?: 'Pagination';
    page: Scalars['Int'];
    pageCount: Scalars['Int'];
    pageSize: Scalars['Int'];
    total: Scalars['Int'];
};

export type PaginationArg = {
    limit?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    start?: InputMaybe<Scalars['Int']>;
};

export type Post = {
    __typename?: 'Post';
    content: Scalars['String'];
    createdAt?: Maybe<Scalars['DateTime']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    title: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
    user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type PostEntity = {
    __typename?: 'PostEntity';
    attributes?: Maybe<Post>;
    id?: Maybe<Scalars['ID']>;
};

export type PostEntityResponse = {
    __typename?: 'PostEntityResponse';
    data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
    __typename?: 'PostEntityResponseCollection';
    data: Array<PostEntity>;
    meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
    content?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<PostFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    title?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PostInput = {
    content?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    title?: InputMaybe<Scalars['String']>;
    user?: InputMaybe<Scalars['ID']>;
};

export type PostRelationResponseCollection = {
    __typename?: 'PostRelationResponseCollection';
    data: Array<PostEntity>;
};

export enum PublicationState {
    Live = 'LIVE',
    Preview = 'PREVIEW',
}

export type Query = {
    __typename?: 'Query';
    autor?: Maybe<AutorEntityResponse>;
    autors?: Maybe<AutorEntityResponseCollection>;
    categories?: Maybe<CategoryEntityResponseCollection>;
    category?: Maybe<CategoryEntityResponse>;
    footer?: Maybe<FooterEntityResponse>;
    i18NLocale?: Maybe<I18NLocaleEntityResponse>;
    i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
    me?: Maybe<UsersPermissionsMe>;
    post?: Maybe<PostEntityResponse>;
    posts?: Maybe<PostEntityResponseCollection>;
    setting?: Maybe<SettingEntityResponse>;
    tag?: Maybe<TagEntityResponse>;
    tags?: Maybe<TagEntityResponseCollection>;
    uploadFile?: Maybe<UploadFileEntityResponse>;
    uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
    usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
    usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
    usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
    usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryAutorArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryAutorsArgs = {
    filters?: InputMaybe<AutorFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCategoriesArgs = {
    filters?: InputMaybe<CategoryFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCategoryArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryFooterArgs = {
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryI18NLocaleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
    filters?: InputMaybe<I18NLocaleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryPostArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryPostsArgs = {
    filters?: InputMaybe<PostFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuerySettingArgs = {
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryTagArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryTagsArgs = {
    filters?: InputMaybe<TagFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
    filters?: InputMaybe<UploadFileFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
    filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
    __typename?: 'ResponseCollectionMeta';
    pagination: Pagination;
};

export type Setting = {
    __typename?: 'Setting';
    blogDescription: Scalars['String'];
    blogLogo: UploadFileEntityResponse;
    blogName: Scalars['String'];
    createdAt?: Maybe<Scalars['DateTime']>;
    menuLink?: Maybe<Array<Maybe<ComponentMenuMenuLink>>>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    text: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SettingMenuLinkArgs = {
    filters?: InputMaybe<ComponentMenuMenuLinkFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SettingEntity = {
    __typename?: 'SettingEntity';
    attributes?: Maybe<Setting>;
    id?: Maybe<Scalars['ID']>;
};

export type SettingEntityResponse = {
    __typename?: 'SettingEntityResponse';
    data?: Maybe<SettingEntity>;
};

export type SettingInput = {
    blogDescription?: InputMaybe<Scalars['String']>;
    blogLogo?: InputMaybe<Scalars['ID']>;
    blogName?: InputMaybe<Scalars['String']>;
    menuLink?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkInput>>>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    text?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    contains?: InputMaybe<Scalars['String']>;
    containsi?: InputMaybe<Scalars['String']>;
    endsWith?: InputMaybe<Scalars['String']>;
    eq?: InputMaybe<Scalars['String']>;
    gt?: InputMaybe<Scalars['String']>;
    gte?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    lt?: InputMaybe<Scalars['String']>;
    lte?: InputMaybe<Scalars['String']>;
    ne?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<StringFilterInput>;
    notContains?: InputMaybe<Scalars['String']>;
    notContainsi?: InputMaybe<Scalars['String']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
    __typename?: 'Tag';
    createdAt?: Maybe<Scalars['DateTime']>;
    name: Scalars['String'];
    publishedAt?: Maybe<Scalars['DateTime']>;
    slug: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagEntity = {
    __typename?: 'TagEntity';
    attributes?: Maybe<Tag>;
    id?: Maybe<Scalars['ID']>;
};

export type TagEntityResponse = {
    __typename?: 'TagEntityResponse';
    data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
    __typename?: 'TagEntityResponseCollection';
    data: Array<TagEntity>;
    meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<TagFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    slug?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
    name?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
    __typename?: 'UploadFile';
    alternativeText?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    ext?: Maybe<Scalars['String']>;
    formats?: Maybe<Scalars['JSON']>;
    hash: Scalars['String'];
    height?: Maybe<Scalars['Int']>;
    mime: Scalars['String'];
    name: Scalars['String'];
    previewUrl?: Maybe<Scalars['String']>;
    provider: Scalars['String'];
    provider_metadata?: Maybe<Scalars['JSON']>;
    related?: Maybe<Array<Maybe<GenericMorph>>>;
    size: Scalars['Float'];
    updatedAt?: Maybe<Scalars['DateTime']>;
    url: Scalars['String'];
    width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
    __typename?: 'UploadFileEntity';
    attributes?: Maybe<UploadFile>;
    id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
    __typename?: 'UploadFileEntityResponse';
    data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
    __typename?: 'UploadFileEntityResponseCollection';
    data: Array<UploadFileEntity>;
    meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
    alternativeText?: InputMaybe<StringFilterInput>;
    and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
    caption?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    ext?: InputMaybe<StringFilterInput>;
    formats?: InputMaybe<JsonFilterInput>;
    hash?: InputMaybe<StringFilterInput>;
    height?: InputMaybe<IntFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    mime?: InputMaybe<StringFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UploadFileFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
    previewUrl?: InputMaybe<StringFilterInput>;
    provider?: InputMaybe<StringFilterInput>;
    provider_metadata?: InputMaybe<JsonFilterInput>;
    size?: InputMaybe<FloatFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    url?: InputMaybe<StringFilterInput>;
    width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
    alternativeText?: InputMaybe<Scalars['String']>;
    caption?: InputMaybe<Scalars['String']>;
    ext?: InputMaybe<Scalars['String']>;
    formats?: InputMaybe<Scalars['JSON']>;
    hash?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['Int']>;
    mime?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    previewUrl?: InputMaybe<Scalars['String']>;
    provider?: InputMaybe<Scalars['String']>;
    provider_metadata?: InputMaybe<Scalars['JSON']>;
    size?: InputMaybe<Scalars['Float']>;
    url?: InputMaybe<Scalars['String']>;
    width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
    __typename?: 'UsersPermissionsCreateRolePayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
    __typename?: 'UsersPermissionsDeleteRolePayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
    identifier: Scalars['String'];
    password: Scalars['String'];
    provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
    __typename?: 'UsersPermissionsLoginPayload';
    jwt?: Maybe<Scalars['String']>;
    user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
    __typename?: 'UsersPermissionsMe';
    blocked?: Maybe<Scalars['Boolean']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    email?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    role?: Maybe<UsersPermissionsMeRole>;
    username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
    __typename?: 'UsersPermissionsMeRole';
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
    __typename?: 'UsersPermissionsPasswordPayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
    __typename?: 'UsersPermissionsPermission';
    action: Scalars['String'];
    createdAt?: Maybe<Scalars['DateTime']>;
    role?: Maybe<UsersPermissionsRoleEntityResponse>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
    __typename?: 'UsersPermissionsPermissionEntity';
    attributes?: Maybe<UsersPermissionsPermission>;
    id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
    action?: InputMaybe<StringFilterInput>;
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
    role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
    __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
    data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
    email: Scalars['String'];
    password: Scalars['String'];
    username: Scalars['String'];
};

export type UsersPermissionsRole = {
    __typename?: 'UsersPermissionsRole';
    createdAt?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
    type?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
    filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
    __typename?: 'UsersPermissionsRoleEntity';
    attributes?: Maybe<UsersPermissionsRole>;
    id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
    __typename?: 'UsersPermissionsRoleEntityResponse';
    data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
    __typename?: 'UsersPermissionsRoleEntityResponseCollection';
    data: Array<UsersPermissionsRoleEntity>;
    meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    description?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
    permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    type?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
    description?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    type?: InputMaybe<Scalars['String']>;
    users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
    __typename?: 'UsersPermissionsUpdateRolePayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
    __typename?: 'UsersPermissionsUser';
    blocked?: Maybe<Scalars['Boolean']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    email: Scalars['String'];
    posts?: Maybe<PostRelationResponseCollection>;
    provider?: Maybe<Scalars['String']>;
    role?: Maybe<UsersPermissionsRoleEntityResponse>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    username: Scalars['String'];
};

export type UsersPermissionsUserPostsArgs = {
    filters?: InputMaybe<PostFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
    __typename?: 'UsersPermissionsUserEntity';
    attributes?: Maybe<UsersPermissionsUser>;
    id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
    __typename?: 'UsersPermissionsUserEntityResponse';
    data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
    __typename?: 'UsersPermissionsUserEntityResponseCollection';
    data: Array<UsersPermissionsUserEntity>;
    meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
    blocked?: InputMaybe<BooleanFilterInput>;
    confirmationToken?: InputMaybe<StringFilterInput>;
    confirmed?: InputMaybe<BooleanFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    email?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<UsersPermissionsUserFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
    password?: InputMaybe<StringFilterInput>;
    posts?: InputMaybe<PostFiltersInput>;
    provider?: InputMaybe<StringFilterInput>;
    resetPasswordToken?: InputMaybe<StringFilterInput>;
    role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
    blocked?: InputMaybe<Scalars['Boolean']>;
    confirmationToken?: InputMaybe<Scalars['String']>;
    confirmed?: InputMaybe<Scalars['Boolean']>;
    email?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    provider?: InputMaybe<Scalars['String']>;
    resetPasswordToken?: InputMaybe<Scalars['String']>;
    role?: InputMaybe<Scalars['ID']>;
    username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
    __typename?: 'UsersPermissionsUserRelationResponseCollection';
    data: Array<UsersPermissionsUserEntity>;
};

export type ImageFragment = { __typename?: 'UploadFile'; alternativeText?: string | null; url: string };

export type CoverCategoryFragment = {
    __typename?: 'Category';
    cover: {
        __typename?: 'UploadFileEntityResponse';
        data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: { __typename?: 'UploadFile'; alternativeText?: string | null; url: string } | null;
        } | null;
    };
};

export type TagFragment = { __typename?: 'Tag'; name: string; slug: string };

export type AuthorFragment = { __typename?: 'Autor'; name: string; slug: string };

export type CategoryFragment = {
    __typename?: 'Category';
    name: string;
    slug: string;
    cover: {
        __typename?: 'UploadFileEntityResponse';
        data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: { __typename?: 'UploadFile'; alternativeText?: string | null; url: string } | null;
        } | null;
    };
};

export type MenuLinkFragment = {
    __typename?: 'ComponentMenuMenuLink';
    id: string;
    link: string;
    text: string;
    newTab: boolean;
};

export type PostFragment = {
    __typename?: 'Post';
    title: string;
    content: string;
    createdAt?: any | null;
    user?: {
        __typename?: 'UsersPermissionsUserEntityResponse';
        data?: {
            __typename?: 'UsersPermissionsUserEntity';
            id?: string | null;
            attributes?: {
                __typename?: 'UsersPermissionsUser';
                email: string;
                confirmed?: boolean | null;
                username: string;
            } | null;
        } | null;
    } | null;
};

export type SettingsFragment = {
    __typename?: 'Setting';
    blogName: string;
    blogDescription: string;
    text: string;
    blogLogo: {
        __typename?: 'UploadFileEntityResponse';
        data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: { __typename?: 'UploadFile'; alternativeText?: string | null; url: string } | null;
        } | null;
    };
    menuLink?: Array<{
        __typename?: 'ComponentMenuMenuLink';
        id: string;
        link: string;
        text: string;
        newTab: boolean;
    } | null> | null;
};

export type PaginationFragment = {
    __typename?: 'Pagination';
    total: number;
    page: number;
    pageSize: number;
    pageCount: number;
};

export type AuthenticateUserMutationVariables = Exact<{
    identifier: Scalars['String'];
    password: Scalars['String'];
}>;

export type AuthenticateUserMutation = {
    __typename?: 'Mutation';
    login: {
        __typename?: 'UsersPermissionsLoginPayload';
        jwt?: string | null;
        user: { __typename?: 'UsersPermissionsMe'; id: string; email?: string | null; username: string };
    };
};

export type Create_Post_1MutationVariables = Exact<{
    id: Scalars['ID'];
    title?: InputMaybe<Scalars['String']>;
    content?: InputMaybe<Scalars['String']>;
    user?: InputMaybe<Scalars['ID']>;
}>;

export type Create_Post_1Mutation = {
    __typename?: 'Mutation';
    createPost?: {
        __typename?: 'PostEntityResponse';
        data?: {
            __typename?: 'PostEntity';
            id?: string | null;
            attributes?: {
                __typename?: 'Post';
                title: string;
                content: string;
                createdAt?: any | null;
                user?: {
                    __typename?: 'UsersPermissionsUserEntityResponse';
                    data?: {
                        __typename?: 'UsersPermissionsUserEntity';
                        id?: string | null;
                        attributes?: {
                            __typename?: 'UsersPermissionsUser';
                            email: string;
                            confirmed?: boolean | null;
                            username: string;
                        } | null;
                    } | null;
                } | null;
            } | null;
        } | null;
    } | null;
};

export type Delete_PostMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type Delete_PostMutation = {
    __typename?: 'Mutation';
    deletePost?: {
        __typename?: 'PostEntityResponse';
        data?: {
            __typename?: 'PostEntity';
            id?: string | null;
            attributes?: {
                __typename?: 'Post';
                title: string;
                content: string;
                createdAt?: any | null;
                user?: {
                    __typename?: 'UsersPermissionsUserEntityResponse';
                    data?: {
                        __typename?: 'UsersPermissionsUserEntity';
                        id?: string | null;
                        attributes?: {
                            __typename?: 'UsersPermissionsUser';
                            email: string;
                            confirmed?: boolean | null;
                            username: string;
                        } | null;
                    } | null;
                } | null;
            } | null;
        } | null;
    } | null;
};

export type Update_PostMutationVariables = Exact<{
    id: Scalars['ID'];
    title?: InputMaybe<Scalars['String']>;
    content?: InputMaybe<Scalars['String']>;
    user?: InputMaybe<Scalars['ID']>;
}>;

export type Update_PostMutation = {
    __typename?: 'Mutation';
    updatePost?: {
        __typename?: 'PostEntityResponse';
        data?: {
            __typename?: 'PostEntity';
            id?: string | null;
            attributes?: {
                __typename?: 'Post';
                title: string;
                content: string;
                createdAt?: any | null;
                user?: {
                    __typename?: 'UsersPermissionsUserEntityResponse';
                    data?: {
                        __typename?: 'UsersPermissionsUserEntity';
                        id?: string | null;
                        attributes?: {
                            __typename?: 'UsersPermissionsUser';
                            email: string;
                            confirmed?: boolean | null;
                            username: string;
                        } | null;
                    } | null;
                } | null;
            } | null;
        } | null;
    } | null;
};

export type GetPostsQueryVariables = Exact<{
    postSearch?: InputMaybe<StringFilterInput>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
    start?: InputMaybe<Scalars['Int']>;
    limit?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
}>;

export type GetPostsQuery = {
    __typename?: 'Query';
    posts?: {
        __typename?: 'PostEntityResponseCollection';
        data: Array<{
            __typename?: 'PostEntity';
            id?: string | null;
            attributes?: {
                __typename?: 'Post';
                title: string;
                content: string;
                createdAt?: any | null;
                user?: {
                    __typename?: 'UsersPermissionsUserEntityResponse';
                    data?: {
                        __typename?: 'UsersPermissionsUserEntity';
                        id?: string | null;
                        attributes?: {
                            __typename?: 'UsersPermissionsUser';
                            email: string;
                            confirmed?: boolean | null;
                            username: string;
                        } | null;
                    } | null;
                } | null;
            } | null;
        }>;
        meta: {
            __typename?: 'ResponseCollectionMeta';
            pagination: { __typename?: 'Pagination'; total: number; page: number; pageSize: number; pageCount: number };
        };
    } | null;
};

export const TagFragmentDoc = gql`
    fragment tag on Tag {
        name
        slug
    }
`;
export const AuthorFragmentDoc = gql`
    fragment author on Autor {
        name
        slug
    }
`;
export const ImageFragmentDoc = gql`
    fragment image on UploadFile {
        alternativeText
        url
    }
`;
export const CoverCategoryFragmentDoc = gql`
    fragment coverCategory on Category {
        cover {
            data {
                id
                attributes {
                    ...image
                }
            }
        }
    }
    ${ImageFragmentDoc}
`;
export const CategoryFragmentDoc = gql`
    fragment category on Category {
        name
        slug
        ...coverCategory
    }
    ${CoverCategoryFragmentDoc}
`;
export const PostFragmentDoc = gql`
    fragment post on Post {
        title
        content
        createdAt
        user {
            data {
                id
                attributes {
                    email
                    confirmed
                    username
                }
            }
        }
    }
`;
export const MenuLinkFragmentDoc = gql`
    fragment menuLink on ComponentMenuMenuLink {
        id
        link
        text
        newTab
    }
`;
export const SettingsFragmentDoc = gql`
    fragment settings on Setting {
        blogName
        blogDescription
        blogLogo {
            data {
                id
                attributes {
                    ...image
                }
            }
        }
        menuLink {
            ...menuLink
        }
        text
    }
    ${ImageFragmentDoc}
    ${MenuLinkFragmentDoc}
`;
export const PaginationFragmentDoc = gql`
    fragment pagination on Pagination {
        total
        page
        pageSize
        pageCount
    }
`;
export const AuthenticateUserDocument = gql`
    mutation AuthenticateUser($identifier: String!, $password: String!) {
        login(input: { identifier: $identifier, password: $password }) {
            jwt
            user {
                id
                email
                username
            }
        }
    }
`;
export type AuthenticateUserMutationFn = Apollo.MutationFunction<
    AuthenticateUserMutation,
    AuthenticateUserMutationVariables
>;

/**
 * __useAuthenticateUserMutation__
 *
 * To run a mutation, you first call `useAuthenticateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateUserMutation, { data, loading, error }] = useAuthenticateUserMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthenticateUserMutation(
    baseOptions?: Apollo.MutationHookOptions<AuthenticateUserMutation, AuthenticateUserMutationVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<AuthenticateUserMutation, AuthenticateUserMutationVariables>(
        AuthenticateUserDocument,
        options,
    );
}
export type AuthenticateUserMutationHookResult = ReturnType<typeof useAuthenticateUserMutation>;
export type AuthenticateUserMutationResult = Apollo.MutationResult<AuthenticateUserMutation>;
export type AuthenticateUserMutationOptions = Apollo.BaseMutationOptions<
    AuthenticateUserMutation,
    AuthenticateUserMutationVariables
>;
export const Create_Post_1Document = gql`
    mutation CREATE_POST_1($id: ID!, $title: String, $content: String, $user: ID) {
        createPost(data: { title: $title, content: $content, user: $user }) {
            data {
                id
                attributes {
                    ...post
                }
            }
        }
    }
    ${PostFragmentDoc}
`;
export type Create_Post_1MutationFn = Apollo.MutationFunction<Create_Post_1Mutation, Create_Post_1MutationVariables>;

/**
 * __useCreate_Post_1Mutation__
 *
 * To run a mutation, you first call `useCreate_Post_1Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Post_1Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPost_1Mutation, { data, loading, error }] = useCreate_Post_1Mutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreate_Post_1Mutation(
    baseOptions?: Apollo.MutationHookOptions<Create_Post_1Mutation, Create_Post_1MutationVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<Create_Post_1Mutation, Create_Post_1MutationVariables>(Create_Post_1Document, options);
}
export type Create_Post_1MutationHookResult = ReturnType<typeof useCreate_Post_1Mutation>;
export type Create_Post_1MutationResult = Apollo.MutationResult<Create_Post_1Mutation>;
export type Create_Post_1MutationOptions = Apollo.BaseMutationOptions<
    Create_Post_1Mutation,
    Create_Post_1MutationVariables
>;
export const Delete_PostDocument = gql`
    mutation DELETE_POST($id: ID!) {
        deletePost(id: $id) {
            data {
                id
                attributes {
                    ...post
                }
            }
        }
    }
    ${PostFragmentDoc}
`;
export type Delete_PostMutationFn = Apollo.MutationFunction<Delete_PostMutation, Delete_PostMutationVariables>;

/**
 * __useDelete_PostMutation__
 *
 * To run a mutation, you first call `useDelete_PostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_PostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDelete_PostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_PostMutation(
    baseOptions?: Apollo.MutationHookOptions<Delete_PostMutation, Delete_PostMutationVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<Delete_PostMutation, Delete_PostMutationVariables>(Delete_PostDocument, options);
}
export type Delete_PostMutationHookResult = ReturnType<typeof useDelete_PostMutation>;
export type Delete_PostMutationResult = Apollo.MutationResult<Delete_PostMutation>;
export type Delete_PostMutationOptions = Apollo.BaseMutationOptions<Delete_PostMutation, Delete_PostMutationVariables>;
export const Update_PostDocument = gql`
    mutation UPDATE_POST($id: ID!, $title: String, $content: String, $user: ID) {
        updatePost(data: { title: $title, content: $content, user: $user }, id: $id) {
            data {
                id
                attributes {
                    ...post
                }
            }
        }
    }
    ${PostFragmentDoc}
`;
export type Update_PostMutationFn = Apollo.MutationFunction<Update_PostMutation, Update_PostMutationVariables>;

/**
 * __useUpdate_PostMutation__
 *
 * To run a mutation, you first call `useUpdate_PostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_PostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdate_PostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdate_PostMutation(
    baseOptions?: Apollo.MutationHookOptions<Update_PostMutation, Update_PostMutationVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<Update_PostMutation, Update_PostMutationVariables>(Update_PostDocument, options);
}
export type Update_PostMutationHookResult = ReturnType<typeof useUpdate_PostMutation>;
export type Update_PostMutationResult = Apollo.MutationResult<Update_PostMutation>;
export type Update_PostMutationOptions = Apollo.BaseMutationOptions<Update_PostMutation, Update_PostMutationVariables>;
export const GetPostsDocument = gql`
    query GetPosts(
        $postSearch: StringFilterInput
        $sort: [String] = "createdAt:desc"
        $start: Int
        $limit: Int
        $pageSize: Int
        $page: Int
    ) {
        posts(
            pagination: { start: $start, limit: $limit, pageSize: $pageSize, page: $page }
            sort: $sort
            filters: { or: [{ title: $postSearch }, { content: $postSearch }] }
        ) {
            data {
                id
                attributes {
                    ...post
                }
            }
            meta {
                pagination {
                    ...pagination
                }
            }
        }
    }
    ${PostFragmentDoc}
    ${PaginationFragmentDoc}
`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      postSearch: // value for 'postSearch'
 *      sort: // value for 'sort'
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *      pageSize: // value for 'pageSize'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
}
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
