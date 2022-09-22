export interface IUserOut {
	id: string
	email: string
	first_name: string
	last_name: string
	status: string
	created_at: Date
	updated_at: Date
}

export interface IUserWithPassOut extends IUserOut {
	password: string
}

export interface ICreateUser {
	email: string
	first_name: string
	last_name: string
	password: string
}

export interface IUserRepository {
	insert(user: ICreateUser): Promise<IUserOut>
	findByEmail(email: string): Promise<IUserWithPassOut>
}