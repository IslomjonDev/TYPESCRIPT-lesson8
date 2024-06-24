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
      // User Post request
      postSignIn: build.mutation({
        query: (body)=> ({
          url: "/auth/sign-in",
          method: "POST",
          body
        }),
        invalidatesTags: ["User"]
      }),
      // Product Post request
      createProduct: build.mutation({
        query: ({body})=> ({
          url: `/products/create`,
          method: "POST",
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
      }),
      // Single Get request
      getDetailProduct: build.query({
        query: (id) => ({
          url: `/products/${id}`,
        }),
      }),
    }),
  })
  
  export const {
    useGetProductsQuery,
    useDeleteProductMutation,
    usePostSignInMutation, 
    useCreateProductMutation , 
    useGetDetailProductQuery,
  } = productApi
