import { defineStore } from 'pinia'
import { reactive } from 'vue'
import graphql from '../api/graphql'

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        // state
        data: reactive({}),
        loading: false,
    }),

    //getters
    getters: {
        getData() {
            return this.data;
        }
    },
    actions: {
        // actions
        async setData() {
            this.loading = true;
            const query = `{
                    medicaments(limit: 20) {
                      denomination
                    }
                    
                    substances(limit: 20) {
                      denominations
                    }}`;
            try {
                const response = await graphql.post(`graphql?query=${query}`);
                this.loading = false;
                this.data = response.data.data.substances;
                console.log(response.data.data.substances)
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        },
        //filter data graphql query
    },
});