import { weatherApi } from "../service";

const weatherEndpoint=weatherApi.injectEndpoints({
    endpoints: (builder) => ({
        getByCityHourly: builder.mutation({
            query:(city)=>({
                url:`forecast/hourly?city=${city}&hours=24&key=943400c9fe664449aad82d817d647579`,
                method:"POST"
            }),
            invalidatesTags:['weatherendpoint']
        }),
        getCurrentByCity: builder.mutation({
            query:(city)=>({
                url:`current?city=${city}&key=943400c9fe664449aad82d817d647579`,
                method:"POST"
            }),
            providesTags:['weatherendpoint']

        }),
        getForecastByCity: builder.mutation({
            query:(city)=>({
                url:`forecast/daily?city=${city},NC&key=943400c9fe664449aad82d817d647579`,
                method:"POST"
            }),
            providesTags:['weatherendpoint']

        }),
    }),
})

export const {useGetByCityHourlyMutation,useGetCurrentByCityMutation,useGetForecastByCityMutation}=weatherEndpoint;