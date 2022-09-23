export interface IBlackListOut {
	id: string;
	token: string
}

export interface IBlackListRepository {
	insert(token: string): Promise<IBlackListOut>
}