import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";
import type { transaksiType } from "./transactions/components/colomns";

export const financeApi = createApi({
  reducerPath: "financeApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [""],
  endpoints: (builder) => ({
    getAllTransaksi: builder.query<transaksiType[], void>({
      query: () => "/keuangan/transaksi",
      providesTags: [""],
    }),
    // postTodo: builder.mutation<void, void>({
    //   query: (body) => ({
    //     url: "/todo",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: [""],
    // }),
  }),
});

export const { useGetAllTransaksiQuery } = financeApi;
