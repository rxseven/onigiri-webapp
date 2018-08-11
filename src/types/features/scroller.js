// @flow

// Meta data
export type ScrollerMeta = {
  paging: {
    next: number | boolean,
    previous: number | boolean
  },
  query: {
    limit: number,
    page: number
  },
  summary: {
    pages: number,
    total: number
  }
};

// Selection mode
export type ScrollerMode = string;

// Query mode
export type ScrollerQueryMode = ?{ [mode: string]: boolean };

// Pagination
export type ScrollerPagination = {
  current: number,
  more: boolean,
  next: number | boolean,
  query: ScrollerQueryMode,
  total: number
};
