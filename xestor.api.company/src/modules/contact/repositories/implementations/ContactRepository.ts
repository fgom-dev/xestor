import { IContactoRepository, IContactOut, ICreateContact } from "../IContactRepository";

export class ContactRepository implements IContactoRepository {
	insert(contact: ICreateContact): Promise<IContactOut> {
		throw new Error("Method not implemented.");
	}

}