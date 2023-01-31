import { ref, computed, watch, nextTick } from "vue";
import { MessageType, ToastPayload } from "./../constants/injectionKeys";

let toasts = ref<ToastPayload[]>([]);

export function useToast() {
	let colors: { [key: string]: string } = {
		Info: MessageType.Info,
		Success: MessageType.Success,
		Error: MessageType.Error,
	};

	// COMPUTED
	const allToasts = computed(() => toasts.value);

	// METHODS
	const createToast = (
		type: string,
		message: string,
		duration: number = 500
	): void => {
		const color: string | undefined = colors[type];
		const now = Date.now();
		toasts.value.push({
			message,
			type,
			delay: duration,
			color: color,
			time: now,
		});
		console.log(allToasts.value, "boom");
	};

	const destroyToast = (toast: ToastPayload): Boolean => {
		let status = false;

		const item = toasts.value.indexOf(toast);

		setTimeout(() => {
			// nextTick();
			// toasts.value.slice(toasts.value.indexOf(toast), 1);
			// toasts.value.shift();
			toasts.value = toasts.value.filter((item) => item.time !== toast.time);
			// if (item > -1) {
			// 	toasts.value.splice(item, 1);
			// }

			status = true;
		}, toast.delay);

		return status;
	};

	watch(
		() => allToasts.value,
		(val) => console.log(val, "yohhoooo")
	);

	return {
		createToast,
		destroyToast,
		allToasts,
	};
}
