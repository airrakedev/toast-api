<template>
	<slot />
</template>

<script setup lang="ts">
import { provide, computed } from "vue";
import { useToast } from "./../composables/useToast";

const { allToasts } = useToast();

const toasts = computed(() => allToasts.value);

provide("toastsList", {
	toasts,
});
</script>
