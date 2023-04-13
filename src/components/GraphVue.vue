<template>
    <div>
        <div>
            <VueMultiselect
                v-model="selected"
                :options="options">
            </VueMultiselect>
            <select v-model="select" 
                class="relative z-10 block p-2 mb-8 text-gray-700 border border-gray-500 
                rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none"
                name="" id="" @click="store.limit = select">
                <option>15</option>
                <option>25</option>
                <option>30</option>
            </select>
        </div>
        <div class="grid grid-cols-3 gap-2">
            <li v-for="(item, index) in store.data" :key="index"
                class="list-none border border-blue-200 p-2"
            >
                {{ item.denominations[0] }}
            </li>
        </div>
    </div>
</template>

<script setup>
import VueMultiselect from 'vue-multiselect'
import { computed, reactive, ref, onMounted } from 'vue';
import { useStore } from '../_store'

const store = useStore();

const select = ref(15);

const options = reactive([
    {name: 'david'}
]);

// computed(() => store.limit = select.value )

onMounted(() => {
    store.setData();
});
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>