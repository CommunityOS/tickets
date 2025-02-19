/* eslint-disable */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* prettier-ignore */
/* This file is automatically generated. Please do not modify it manually. */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: string; output: string; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string; }
};

/** Representation of a workEmail */
export type AllowedCurrency = {
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
  validPaymentMethods: ValidPaymentMethods;
};

export type CheckForPurchaseOrderInput = {
  purchaseOrderId: Scalars['String']['input'];
};

export enum CommnunityStatus {
  Active = 'active',
  Inactive = 'inactive'
}

/** Representation of a Community */
export type Community = {
  banner: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  events: Array<Event>;
  id: Scalars['String']['output'];
  logo: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  status: CommnunityStatus;
  users: Array<User>;
};

/** Representation of a workEmail */
export type Company = {
  description: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  hasBeenUpdated: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  logo: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  salarySubmissions: Scalars['Int']['output'];
  /** Not available to users */
  status: Maybe<CompanyStatus>;
  website: Maybe<Scalars['String']['output']>;
};

export enum CompanyStatus {
  Active = 'active',
  Draft = 'draft',
  Inactive = 'inactive'
}

/** Representation of a consolidated payment entry log calculation */
export type ConsolidatedPaymentLogEntry = {
  currencyId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  totalTransactionAmount: Scalars['Float']['output'];
};

export type CreateCommunityInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateCompanyInput = {
  description: InputMaybe<Scalars['String']['input']>;
  /** The email domain of the company (What we'll use to match the company to the user on account-creation) */
  domain: Scalars['String']['input'];
  logo: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<CompanyStatus>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type CreateSalaryInput = {
  amount: Scalars['Int']['input'];
  companyId: Scalars['String']['input'];
  confirmationToken: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  gender: Gender;
  genderOtherText: Scalars['String']['input'];
  typeOfEmployment: TypeOfEmployment;
  workMetodology: WorkMetodology;
  workSeniorityAndRoleId: Scalars['String']['input'];
  yearsOfExperience: Scalars['Int']['input'];
};

export enum EmailStatus {
  Confirmed = 'confirmed',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type EnqueueGoogleAlbumImportInput = {
  albumId: Scalars['String']['input'];
  sanityEventId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Representation of an Event (Events and Users, is what tickets are linked to) */
export type Event = {
  address: Maybe<Scalars['String']['output']>;
  community: Maybe<Community>;
  description: Maybe<Scalars['String']['output']>;
  endDateTime: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  images: Array<SanityAssetRef>;
  latitude: Maybe<Scalars['String']['output']>;
  longitude: Maybe<Scalars['String']['output']>;
  maxAttendees: Maybe<Scalars['Int']['output']>;
  meetingURL: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  startDateTime: Scalars['DateTime']['output'];
  status: EventStatus;
  tags: Array<Tag>;
  /** List of tickets for sale or redemption for this event. (If you are looking for a user's tickets, use the usersTickets field) */
  tickets: Array<Ticket>;
  users: Array<User>;
  /** List of tickets that a user owns for this event. */
  usersTickets: Array<UserTicket>;
  visibility: EventVisibility;
};


/** Representation of an Event (Events and Users, is what tickets are linked to) */
export type EventUsersTicketsArgs = {
  input: InputMaybe<EventsTicketsSearchInput>;
};

export type EventCreateInput = {
  address: InputMaybe<Scalars['String']['input']>;
  communityId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  endDateTime: InputMaybe<Scalars['DateTime']['input']>;
  latitude: InputMaybe<Scalars['String']['input']>;
  longitude: InputMaybe<Scalars['String']['input']>;
  maxAttendees: Scalars['Int']['input'];
  meetingURL: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  startDateTime: Scalars['DateTime']['input'];
  status: InputMaybe<EventStatus>;
  timeZone: InputMaybe<Scalars['String']['input']>;
  visibility: InputMaybe<EventVisibility>;
};

export type EventEditInput = {
  address: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  endDateTime: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  latitude: InputMaybe<Scalars['String']['input']>;
  longitude: InputMaybe<Scalars['String']['input']>;
  maxAttendees: InputMaybe<Scalars['Int']['input']>;
  meetingURL: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  startDateTime: InputMaybe<Scalars['DateTime']['input']>;
  status: InputMaybe<EventStatus>;
  timeZone: InputMaybe<Scalars['String']['input']>;
  visibility: InputMaybe<EventVisibility>;
};

/** Search for tags */
export type EventImageSearch = {
  eventId: Scalars['String']['input'];
};

export enum EventStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export enum EventVisibility {
  Private = 'private',
  Public = 'public',
  Unlisted = 'unlisted'
}

export type EventsSearchInput = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  startDateTimeFrom: InputMaybe<Scalars['DateTime']['input']>;
  startDateTimeTo: InputMaybe<Scalars['DateTime']['input']>;
  status: InputMaybe<EventStatus>;
  visibility: InputMaybe<EventVisibility>;
};

export type EventsTicketsSearchInput = {
  approvalStatus: InputMaybe<TicketApprovalStatus>;
  id: InputMaybe<Scalars['String']['input']>;
  paymentStatus: InputMaybe<TicketPaymentStatus>;
  redemptionStatus: InputMaybe<TicketRedemptionStatus>;
};

export enum Gender {
  Agender = 'agender',
  Female = 'female',
  Genderfluid = 'genderfluid',
  Genderqueer = 'genderqueer',
  Male = 'male',
  NonBinary = 'non_binary',
  Other = 'other',
  PreferNotToSay = 'prefer_not_to_say',
  TransgenderFemale = 'transgender_female',
  TransgenderMale = 'transgender_male',
  TwoSpirit = 'two_spirit'
}

export type GeneratePaymentLinkInput = {
  currencyId: Scalars['String']['input'];
};

export type Mutation = {
  /** Approve a ticket */
  approvalUserTicket: UserTicket;
  /** Cancel a ticket */
  cancelUserTicket: UserTicket;
  /** Check the status of a purchase order */
  checkPurchaseOrderStatus: PurchaseOrder;
  /** Attempt to claim a certain ammount of tickets */
  claimUserTicket: RedeemUserTicketResponse;
  /** Create an community */
  createCommunity: Community;
  /** Create a company */
  createCompany: Company;
  /** Create an event */
  createEvent: Event;
  /** Create a salary */
  createSalary: Salary;
  /** Create a ticket */
  createTicket: Ticket;
  /** Edit an community */
  editCommunity: Community;
  /** Edit an event */
  editEvent: Event;
  /** Edit a ticket */
  editTicket: Ticket;
  /** Enqueue images to import */
  enqueueGoogleAlbumImport: Scalars['Boolean']['output'];
  /** Create a purchase order */
  payForPurchaseOrder: PurchaseOrder;
  /** Redeem a ticket */
  redeemUserTicket: UserTicket;
  /** Kickoff the email validation flow. This flow will links an email to a user, create a company if it does not exist, and allows filling data for that email's position */
  startWorkEmailValidation: WorkEmail;
  /** Update a company */
  updateCompany: Company;
  /** Create a salary */
  updateSalary: Salary;
  /** Update a user */
  updateUser: User;
  /** Update a user role */
  updateUserRoleInCommunity: User;
  /** Validates work email for a user */
  validateWorkEmail: WorkEmail;
};


export type MutationApprovalUserTicketArgs = {
  userTicketId: Scalars['String']['input'];
};


export type MutationCancelUserTicketArgs = {
  userTicketId: Scalars['String']['input'];
};


export type MutationCheckPurchaseOrderStatusArgs = {
  input: CheckForPurchaseOrderInput;
};


export type MutationClaimUserTicketArgs = {
  input: TicketClaimInput;
};


export type MutationCreateCommunityArgs = {
  input: CreateCommunityInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationCreateEventArgs = {
  input: EventCreateInput;
};


export type MutationCreateSalaryArgs = {
  input: CreateSalaryInput;
};


export type MutationCreateTicketArgs = {
  input: TicketCreateInput;
};


export type MutationEditCommunityArgs = {
  input: UpdateCommunityInput;
};


export type MutationEditEventArgs = {
  input: EventEditInput;
};


export type MutationEditTicketArgs = {
  input: TicketEditInput;
};


export type MutationEnqueueGoogleAlbumImportArgs = {
  input: EnqueueGoogleAlbumImportInput;
};


export type MutationPayForPurchaseOrderArgs = {
  input: PayForPurchaseOrderInput;
};


export type MutationRedeemUserTicketArgs = {
  userTicketId: Scalars['String']['input'];
};


export type MutationStartWorkEmailValidationArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationUpdateSalaryArgs = {
  input: UpdateSalaryInput;
};


export type MutationUpdateUserArgs = {
  input: UserEditInput;
};


export type MutationUpdateUserRoleInCommunityArgs = {
  input: UpdateUserRoleInCommunityInput;
};


export type MutationValidateWorkEmailArgs = {
  confirmationToken: Scalars['String']['input'];
};

export type MyTicketsSearchInput = {
  approvalStatus: InputMaybe<TicketApprovalStatus>;
  eventId: InputMaybe<Scalars['String']['input']>;
  paymentStatus: InputMaybe<TicketPaymentStatus>;
  redemptionStatus: InputMaybe<TicketRedemptionStatus>;
};

export type PayForPurchaseOrderInput = {
  currencyID: Scalars['String']['input'];
  purchaseOrderId: Scalars['String']['input'];
};

/** Representation of a TicketPrice */
export type Price = {
  amount: Scalars['Int']['output'];
  currency: AllowedCurrency;
  id: Scalars['ID']['output'];
};

export type PricingInputField = {
  currencyId: Scalars['String']['input'];
  /** The price. But in cents, so for a $10 ticket, you'd pass 1000 (or 10_00), or for 1000 chilean pesos, you'd pass 1000_00 */
  value_in_cents: Scalars['Int']['input'];
};

/** Representation of a payment log entry */
export type PublicFinanceEntryRef = {
  createdAt: Scalars['DateTime']['output'];
  currencyId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  transactionAmount: Scalars['Float']['output'];
  transactionDate: Maybe<Scalars['DateTime']['output']>;
};

/** Representation of a Purchase Order */
export type PurchaseOrder = {
  currency: Maybe<AllowedCurrency>;
  finalPrice: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  paymentLink: Maybe<Scalars['String']['output']>;
  status: Maybe<PurchaseOrderStatusEnum>;
  tickets: Array<UserTicket>;
};

export type PurchaseOrderInput = {
  quantity: Scalars['Int']['input'];
  ticketId: Scalars['String']['input'];
};

export enum PurchaseOrderStatusEnum {
  NotRequired = 'not_required',
  Paid = 'paid',
  Unpaid = 'unpaid'
}

export type Query = {
  /** Get a list of communities. Filter by name, id, or status */
  communities: Array<Community>;
  /** Get a community by id */
  community: Maybe<Community>;
  /** Get all available companies */
  companies: Array<Company>;
  /** Get all available companies */
  company: Company;
  /** Get an event by id */
  event: Maybe<Event>;
  /** Get a list of images, that are attached to an event */
  eventImages: Array<SanityAssetRef>;
  /** Get a list of events. Filter by name, id, status or date */
  events: Array<Event>;
  /** Get the current user */
  me: User;
  /** Get a list of tickets for the current user */
  myTickets: Array<UserTicket>;
  /** Get a list of salaries associated to the user */
  salaries: Array<Salary>;
  /** Search a consolidated payment logs, by date, aggregated by platform and currency_id */
  searchConsolidatedPaymentLogs: Array<ConsolidatedPaymentLogEntry>;
  /** Search on the payment logs by date, and returns a list of payment logs */
  searchPaymentLogs: Array<PublicFinanceEntryRef>;
  status: Scalars['String']['output'];
  /** Get a list of tags */
  tags: Array<Tag>;
  /** Get a list of users */
  userSearch: Array<User>;
  /** Get a list of users */
  users: Array<User>;
  /** Get a workEmail and check if its validated for this user */
  workEmail: WorkEmail;
  /** Get a list of validated work emails for the user */
  workEmails: Array<ValidatedWorkEmail>;
  /** Get a a work role's seniorities */
  workRoleSeniorities: Array<WorkSeniority>;
  /** Get a list of possible work roles */
  workRoles: Array<WorkRole>;
};


export type QueryCommunitiesArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<CommnunityStatus>;
};


export type QueryCommunityArgs = {
  id: Scalars['String']['input'];
};


export type QueryCompaniesArgs = {
  input: InputMaybe<SearchCompaniesInput>;
};


export type QueryCompanyArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventImagesArgs = {
  input: EventImageSearch;
};


export type QueryEventsArgs = {
  input: InputMaybe<EventsSearchInput>;
};


export type QueryMyTicketsArgs = {
  input: InputMaybe<MyTicketsSearchInput>;
};


export type QuerySearchConsolidatedPaymentLogsArgs = {
  input: SearchPaymentLogsInput;
};


export type QuerySearchPaymentLogsArgs = {
  input: SearchPaymentLogsInput;
};


export type QueryStatusArgs = {
  name: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagsArgs = {
  input: InputMaybe<TagSearchInput>;
};


export type QueryUserSearchArgs = {
  input: UserSearchInput;
};


export type QueryWorkEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryWorkRoleSenioritiesArgs = {
  input: WorkRoleSenioritiesInput;
};

export type RedeemUserTicketError = {
  error: Scalars['Boolean']['output'];
  errorMessage: Scalars['String']['output'];
};

export type RedeemUserTicketResponse = PurchaseOrder | RedeemUserTicketError;

/** Representation of a workEmail */
export type Salary = {
  amount: Scalars['Int']['output'];
  company: Company;
  countryCode: Scalars['String']['output'];
  currencyCode: Scalars['String']['output'];
  gender: Maybe<Gender>;
  genderOtherText: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  typeOfEmployment: TypeOfEmployment;
  workMetodology: WorkMetodology;
  workRole: WorkRole;
  workSeniority: WorkSeniority;
  yearsOfExperience: Scalars['Int']['output'];
};

/** Representation of a Sanity Asset */
export type SanityAssetRef = {
  assetId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  originalFilename: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type SearchCompaniesInput = {
  companyName: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  domain: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type SearchPaymentLogsInput = {
  endDate: InputMaybe<Scalars['DateTime']['input']>;
  startDate: Scalars['DateTime']['input'];
};

export enum SearchableUserTags {
  CoreTeam = 'CORE_TEAM',
  DevTeam = 'DEV_TEAM',
  Donor = 'DONOR'
}

/** Representation of a tag. Tags can be associated to many things. An event, a community, etc. */
export type Tag = {
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

export type TagSearchInput = {
  description: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

/** Representation of a ticket */
export type Ticket = {
  description: Maybe<Scalars['String']['output']>;
  endDateTime: Maybe<Scalars['DateTime']['output']>;
  eventId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Whether or not the ticket is free */
  isFree: Scalars['Boolean']['output'];
  /** Whether or not the ticket has an unlimited quantity. This is reserved for things loike online events. */
  isUnlimited: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  prices: Maybe<Array<Price>>;
  /** The number of tickets available for this ticket type */
  quantity: Maybe<Scalars['Int']['output']>;
  requiresApproval: Scalars['Boolean']['output'];
  startDateTime: Scalars['DateTime']['output'];
  status: TicketTemplateStatus;
  visibility: TicketTemplateVisibility;
};

export enum TicketApprovalStatus {
  Approved = 'approved',
  Cancelled = 'cancelled',
  NotRequired = 'not_required',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type TicketClaimInput = {
  /** If this field is passed, a purchase order payment link will be generated right away */
  generatePaymentLink: InputMaybe<GeneratePaymentLinkInput>;
  /** A unique key to prevent duplicate requests, it's optional to send, but it's recommended to send it to prevent duplicate requests. If not sent, it will be created by the server. */
  idempotencyUUIDKey: InputMaybe<Scalars['String']['input']>;
  purchaseOrder: Array<PurchaseOrderInput>;
};

export type TicketCreateInput = {
  description: InputMaybe<Scalars['String']['input']>;
  endDateTime: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  /** If the ticket is free, the price submitted will be ignored. */
  isFree: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  prices: InputMaybe<Array<PricingInputField>>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  requiresApproval: InputMaybe<Scalars['Boolean']['input']>;
  startDateTime: Scalars['DateTime']['input'];
  status: InputMaybe<TicketTemplateStatus>;
  /** If provided, quantity must not be passed. This is for things like online events where there is no limit to the amount of tickets that can be sold. */
  unlimitedTickets: Scalars['Boolean']['input'];
  visibility: InputMaybe<TicketTemplateVisibility>;
};

export type TicketEditInput = {
  description: InputMaybe<Scalars['String']['input']>;
  endDateTime: InputMaybe<Scalars['DateTime']['input']>;
  eventId: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  prices: InputMaybe<PricingInputField>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  requiresApproval: InputMaybe<Scalars['Boolean']['input']>;
  startDateTime: InputMaybe<Scalars['DateTime']['input']>;
  status: InputMaybe<TicketTemplateStatus>;
  ticketId: Scalars['String']['input'];
  /** If provided, quantity must not be passed. This is for things like online events where there is no limit to the amount of tickets that can be sold. */
  unlimitedTickets: InputMaybe<Scalars['Boolean']['input']>;
  visibility: InputMaybe<TicketTemplateVisibility>;
};

export enum TicketPaymentStatus {
  NotRequired = 'not_required',
  Paid = 'paid',
  Unpaid = 'unpaid'
}

export enum TicketRedemptionStatus {
  Pending = 'pending',
  Redeemed = 'redeemed'
}

export enum TicketTemplateStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export enum TicketTemplateVisibility {
  Private = 'private',
  Public = 'public',
  Unlisted = 'unlisted'
}

export enum TypeOfEmployment {
  Freelance = 'freelance',
  FullTime = 'fullTime',
  PartTime = 'partTime'
}

export type UpdateCommunityInput = {
  communityId: Scalars['String']['input'];
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<CommnunityStatus>;
};

export type UpdateCompanyInput = {
  companyId: Scalars['String']['input'];
  description: InputMaybe<Scalars['String']['input']>;
  domain: InputMaybe<Scalars['String']['input']>;
  logo: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSalaryInput = {
  amount: InputMaybe<Scalars['Int']['input']>;
  confirmationToken: Scalars['String']['input'];
  countryCode: InputMaybe<Scalars['String']['input']>;
  currencyCode: InputMaybe<Scalars['String']['input']>;
  gender: InputMaybe<Gender>;
  genderOtherText: InputMaybe<Scalars['String']['input']>;
  salaryId: Scalars['String']['input'];
  typeOfEmployment: InputMaybe<TypeOfEmployment>;
  workMetodology: InputMaybe<WorkMetodology>;
  workSeniorityAndRoleId: InputMaybe<Scalars['String']['input']>;
  yearsOfExperience: InputMaybe<Scalars['Int']['input']>;
};

/** Representation of a user */
export type User = {
  bio: Maybe<Scalars['String']['output']>;
  communities: Array<Community>;
  id: Scalars['String']['output'];
  isSuperAdmin: Maybe<Scalars['Boolean']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

/** Representation of a User ticket */
export type UserTicket = {
  approvalStatus: TicketApprovalStatus;
  id: Scalars['ID']['output'];
  paymentStatus: TicketPaymentStatus;
  redemptionStatus: TicketRedemptionStatus;
};

export enum ValidPaymentMethods {
  MercadoPago = 'mercado_pago',
  Stripe = 'stripe'
}

/** Representation of a work email associated to the current user */
export type ValidatedWorkEmail = {
  company: Maybe<Company>;
  confirmationDate: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  isValidated: Scalars['Boolean']['output'];
  status: EmailStatus;
  workEmail: Scalars['String']['output'];
};

/** Representation of a (yet to validate) work email */
export type WorkEmail = {
  id: Scalars['String']['output'];
  isValidated: Scalars['Boolean']['output'];
};

export enum WorkMetodology {
  Hybrid = 'hybrid',
  Office = 'office',
  Remote = 'remote'
}

/** Representation of a work role */
export type WorkRole = {
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  seniorities: Array<WorkSeniority>;
};

export type WorkRoleSenioritiesInput = {
  workRoleId: Scalars['String']['input'];
};

/** Representation of a work seniority */
export type WorkSeniority = {
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type UpdateUserRoleInCommunityInput = {
  communityId: Scalars['String']['input'];
  role: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserEditInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type UserSearchInput = {
  tags: InputMaybe<Array<SearchableUserTags>>;
};

export type GetEventQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetEventQuery = { event: { id: string, name: string, address: string | null, description: string | null, maxAttendees: number | null, startDateTime: string, status: EventStatus, community: { name: string | null } | null, users: Array<{ id: string, name: string | null, lastName: string | null }> } | null };

export type GetLatestEventsQueryVariables = Exact<{
  input: InputMaybe<EventsSearchInput>;
}>;


export type GetLatestEventsQuery = { events: Array<{ id: string, name: string, description: string | null, startDateTime: string, endDateTime: string | null }> };

export type FetchExampleEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchExampleEventsQuery = { events: Array<{ id: string, description: string | null, community: { id: string, name: string | null } | null, tags: Array<{ id: string, name: string | null, description: string | null }> }> };

export type EventTicketFragmentFragment = { id: string, name: string, description: string | null, quantity: number | null, isFree: boolean, startDateTime: string, status: TicketTemplateStatus, isUnlimited: boolean, prices: Array<{ id: string, amount: number, currency: { currency: string, id: string } }> | null } & { ' $fragmentName'?: 'EventTicketFragmentFragment' };

export type CreatePurchaseOrderMutationVariables = Exact<{
  input: TicketClaimInput;
}>;


export type CreatePurchaseOrderMutation = { claimUserTicket: { __typename: 'PurchaseOrder', id: string, finalPrice: number | null, paymentLink: string | null, status: PurchaseOrderStatusEnum | null, currency: { id: string } | null, tickets: Array<{ id: string, approvalStatus: TicketApprovalStatus, redemptionStatus: TicketRedemptionStatus, paymentStatus: TicketPaymentStatus }> } | { __typename: 'RedeemUserTicketError', error: boolean, errorMessage: string } };

export type GetEventAndTicketsQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetEventAndTicketsQuery = { event: { id: string, name: string, address: string | null, description: string | null, maxAttendees: number | null, startDateTime: string, endDateTime: string | null, status: EventStatus, community: { name: string | null } | null, users: Array<{ id: string, name: string | null }>, tickets: Array<{ ' $fragmentRefs'?: { 'EventTicketFragmentFragment': EventTicketFragmentFragment } }> } | null };

export const EventTicketFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventTicketFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Ticket"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"isFree"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isUnlimited"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<EventTicketFragmentFragment, unknown>;
export const GetEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"maxAttendees"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"community"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>;
export const GetLatestEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLatestEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventsSearchInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}}]}}]}}]} as unknown as DocumentNode<GetLatestEventsQuery, GetLatestEventsQueryVariables>;
export const FetchExampleEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchExampleEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"community"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<FetchExampleEventsQuery, FetchExampleEventsQueryVariables>;
export const CreatePurchaseOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPurchaseOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TicketClaimInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"claimUserTicket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseOrder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"paymentLink"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tickets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"approvalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"redemptionStatus"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStatus"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RedeemUserTicketError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePurchaseOrderMutation, CreatePurchaseOrderMutationVariables>;
export const GetEventAndTicketsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEventAndTickets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"maxAttendees"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"community"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tickets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventTicketFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventTicketFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Ticket"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"isFree"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isUnlimited"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetEventAndTicketsQuery, GetEventAndTicketsQueryVariables>;