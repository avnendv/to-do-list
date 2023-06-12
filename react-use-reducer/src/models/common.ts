export interface Todo {
	id: number;
	title: string;
}

export type Payload = string | number;
export type Action = { type: string; payload: Payload };
