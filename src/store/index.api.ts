import { baseUrl } from "../config/url.config";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  refetchOnFocus: true,
  tagTypes: ["tasks"],
  endpoints: (build) => ({
    default: build.query({
      query: () => "default",
    }),
  }),
});
