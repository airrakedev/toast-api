export enum MessageType {
	Info = "indigo",
	Success = "green",
	Error = "red",
}

export interface Colors {
	Info: string;
	Success: string;
	Error: string;
}
export interface ToastPayload {
	message: string;
	type: string;
	color: string;
	delay: number;
	time: number;
}
