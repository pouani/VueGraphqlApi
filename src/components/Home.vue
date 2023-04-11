<template>
    <div>
        {{ store.getData }}
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useStore } from '../_store'

const store = useStore();

onMounted(() => {
    store.setData();
});
</script>