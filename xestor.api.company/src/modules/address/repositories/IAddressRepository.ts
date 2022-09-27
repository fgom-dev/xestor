export interface ICreateAddress {
	description: string;
	public_place: string;
	number: string;
	complement?: string;
	district: string;
	county: string;
	county_code: string;
	federated_unit: string;
	zip_code: string;
}

export interface IAddressOut {
	id: string;
	description: string;
	public_place: string;
	number: string;
	complement?: string;
	district: string;
	county: string;
	county_code: string;
	federated_unit: string;
	zip_code: string;
	status: string;
	created_at: Date;
	updated_at: Date;
}

export interface IAddressRepository {
	insert(address: ICreateAddress): Promise<IAddressOut>;
}