import { api } from './index'

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
      // Get request
      getProducts: build.query({
        query: (params) => ({ 
          url: '/products/search', 
          params 
        }),
        providesTags:["Product"]
      }),
      // Post request
      SignIn: build.mutation({
        query: (body)=> ({
          url: "/auth/sign-in",
          method: "POST",
          body
        }),
        invalidatesTags: ["Product"]
      }),
      // Patch request
      updateProduct: build.mutation({
        query: ({_id, body})=> ({
          url: `/`,
          method: "PATCH",
          body
        }),
        invalidatesTags: ["Product"]
      }),
      // Delete request
      deleteProduct: build.mutation({
        query: (id)=> ({
          url:`/`,
          method: "DELETE"
        }),
        invalidatesTags: ["Product"]
      })
    }),
  })
  
  export const {
    useGetProductsQuery,
    useDeleteProductMutation,
    usePostSignIn,
    useUpdateProductMutation
  } = productApi
