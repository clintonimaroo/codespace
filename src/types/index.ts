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

interface FeaturedImage {
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

interface Doc {
  updatedBy: Author;
  author: Author;
  id: string;
  title: string;
  featuredImage: FeaturedImage;
  content: {
    root: Record<string, unknown>;
  };
  createdAt: string;
  updatedAt: string;
  _status: string;
}

interface Author {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  username: string;
  loginAttempts: number;
}

export interface BlogsAPIResponse {
  docs: Doc[];
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
