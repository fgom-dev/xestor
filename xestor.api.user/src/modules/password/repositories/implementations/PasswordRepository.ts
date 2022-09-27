import { prisma } from "../../../../prisma/client";
import { IPasswordOut, IPasswordRepository } from "../IPasswordRepository";

export class PasswordRepository implements IPasswordRepository {
	constructor(private prismaPassword = prisma.password) { }

	async findByUserId(userId: string): Promise<IPasswordOut> {
		const password = await this.prismaPassword.findUnique({
			where: {
				userId
			}
		})

		return password!
	}

}