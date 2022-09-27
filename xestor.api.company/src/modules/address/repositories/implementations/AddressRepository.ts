import { IAddressOut, IAddressRepository, ICreateAddress } from "../IAddressRepository";

export class AddressRepository implements IAddressRepository {
	insert(address: ICreateAddress): Promise<IAddressOut> {
		throw new Error("Method not implemented.");
	}

}