export interface ICreateCompany {
	cnpj: string;
	corporate_name: string;
	trading_name: string;
	tax_regime: string;
	state_registration: string;
}

export interface ICompanyOut {
	id: string;
	cnpj: string;
	corporate_name: string;
	trading_name: string;
	tax_regime: string;
	state_registration: string;
	status: string;
	created_at: Date;
	updated_at: Date;
}

export interface ICompanyRepository {
	insert(company: ICreateCompany): Promise<ICompanyOut>
}