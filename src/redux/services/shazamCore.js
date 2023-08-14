import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"



    export const shazamCoreApi=createApi({
       reducerPath:'shazamCoreApi',
       baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core7.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','232887473fmshfeb96846110bae4p164aacjsn329ed419322b')
        return headers;
        }
       }),
       endspoint:(builder)=>({
        geTopCharts:builder.query({query:()=>'/charts/world'})
       })
    });
    export const{
        useGetTopChartQuery,

    }=shazamCoreApi;