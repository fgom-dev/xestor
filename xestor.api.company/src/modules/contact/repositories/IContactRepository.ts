export interface ICreateContact {
	description: string;
	contact: string
}

export interface IContactOut {
	id: string;
	description: string;
	contact: string;
	status: string;
	created_at: Date;
	updated_at: Date;
}

export interface IContactoRepository {
	insert(contact: ICreateContact): Promise<IContactOut>;
}