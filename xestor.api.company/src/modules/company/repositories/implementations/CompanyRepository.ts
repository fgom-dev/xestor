import { prisma } from "../../../../prisma/client";
import { ICompanyOut, ICompanyRepository, ICreateCompany } from "../ICompanyRepository";

export class CompanyRepository implements ICompanyRepository {
	constructor(private prismaCompany = prisma.company) { }

	async insert({ cnpj, corporate_name, state_registration, tax_regime, trading_name }: ICreateCompany): Promise<ICompanyOut> {
		const company = await this.prismaCompany.create({
			data: {
				cnpj,
				corporate_name,
				state_registration,
				tax_regime,
				trading_name,
			}
		})

		return company
	}

}