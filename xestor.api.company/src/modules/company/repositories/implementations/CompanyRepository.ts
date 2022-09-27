import { ICompanyOut, ICompanyRepository, ICreateCompany } from "../ICompanyRepository";

export class CompanyRepository implements ICompanyRepository {
	insert(company: ICreateCompany): Promise<ICompanyOut> {
		throw new Error("Method not implemented.");
	}

}