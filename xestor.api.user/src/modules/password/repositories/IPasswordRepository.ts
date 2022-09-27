export interface IPasswordOut {
	id: string
	password: string
	userId: string
}

export interface IPasswordRepository {
	findByUserId(userId: string): Promise<IPasswordOut>
}