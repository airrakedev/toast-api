<template>
	<div
		class="absolute h-full right-0 max-h-screen max-w-64 overflow-y-auto overflow-x-hidden"
	>
		<TransitionGroup
			tag="ul"
			name="fade"
			class="relative list-none p-4 flex flex-col gap-4"
		>
			<template v-for="(toast, index) in toasts" :key="index">
				<!-- list-leave-active list-leave-to -->
				<li
					class="p-3 rounded-lg border border-solid w-full"
					:class="[`border-${toast.color}-500`, `bg-${toast.color}-100`]"
					v-if="!destroyToast(toast)"
				>
					{{ toast.message }}
				</li>
			</template>
		</TransitionGroup>
	</div>
	<div
		class="flex flex-col items-center justify-center gap-4 w-screen h-screen"
	>
		<button
			class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
			@click="createToast('Info', 'This is an info toast', 5000)"
		>
			SHOW INFO TOAST
		</button>

		<button
			class="p-4 bg-green-100 border border-solid border-green-500 rounded-md"
			@click="createToast('Success', 'This is an success toast', 5000)"
		>
			SHOW SUCCESS TOAST
		</button>

		<button
			class="p-4 bg-red-100 border border-solid border-red-500 rounded-md"
			@click="createToast('Error', 'This is an error toast', 5000)"
		>
			SHOW ERROR TOAST
		</button>
	</div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useToast } from "./composables/useToast";
// const toastApi = useToast();
const { createToast, destroyToast } = useToast();

const toasts = (inject("toastsList") as any).toasts;
</script>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
	transition: all 0.75s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scaleY(0.75) translate(50px, 0);
}

.fade-leave-active {
	position: absolute;
}
</style>
