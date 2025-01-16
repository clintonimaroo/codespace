export interface EventType {
  image: string;
  title: string;
  date: string;
  description: string;
  action_link: string;
  action_text: string;
  location?: string;
}

export interface StatType {
  name: string;
  value: number | string;
  suffix: string;
  description?: string;
}

export interface FeaturedImage {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  createdAt: string;
  updatedAt: string;
  url: string;
  thumbnailURL: string | null;
}

export interface Author {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  username: string;
  loginAttempts: number;
}

export interface Block {
  type: string;
  children?: Child[];
}

export interface Child {
  text: string;
}

export interface Content {
  root: {
    children: Block[];
  };
}

export interface Pagination {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface LexicalNode {
  type: string;
  format?: number;
  style?: string;
  text?: string;
  children?: LexicalNode[];
  version?: number;
  url?: string;
  tag?: string;
  listType?: 'number' | 'bullet';
}

export interface LexicalContent {
  root: {
    children: LexicalNode[];
    direction: null | 'ltr' | 'rtl';
    format: string;
    indent: number;
    type: string;
    version: number;
  };
}

export interface Media {
  id: string;
  url: string;
  alt?: string;
}

export interface Author {
  id: string;
  name: string;
}

export interface BlogDoc {
  id: string;
  title: string;
  content: LexicalContent;
  featuredImage: Media;
  author?: Author;
  createdAt: string;
  updatedAt: string;
  excerpt: string;
  isFeatured: boolean;
}

export interface Event {
  id: string;
  eventTitle: string;
  coverImage: FeaturedImage;
  date: string;
  description: string;
  location: string;
  callToAction?: string;
  eventLink: string;
  createdAt: string;
  updatedAt: string;
}

export type UpcomingEvent = {
  stats: [
    {
      statTitle: string;
      statValue: number;
      id: string;
    },
  ];
} & Event;

export type UpcomingEvents = {
  docs: UpcomingEvent[];
} & Pagination;

export interface BlogsAPIResponse extends Pagination {
  docs: BlogDoc[];
}
