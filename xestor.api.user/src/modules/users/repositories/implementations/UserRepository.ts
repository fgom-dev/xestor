import { prisma } from "../../../../prisma/client";
import { ICreateUser, IUserRepository, IUserOut, IUserWithPassOut, IUserUpdate } from "../IUserRepository";

export class UserRepository implements IUserRepository {
	constructor(private prismaUser = prisma.user) { }

	async update({ id, email, first_name, last_name }: IUserUpdate): Promise<IUserOut> {
		const user = await this.prismaUser.update({
			data: {
				email,
				first_name,
				last_name,
				updated_at: new Date(),
			},
			where: {
				id
			},
			select: {
				id: true,
				email: true,
				first_name: true,
				last_name: true,
				status: true,
				created_at: true,
				updated_at: true
			}
		})

		return user
	}

	async findByEmail(email: string): Promise<IUserWithPassOut> {
		const user = await this.prismaUser.findUnique({
			where: {
				email
			}
		})

		return user as IUserWithPassOut
	}

	async insert(data: ICreateUser): Promise<IUserOut> {
		const user = await this.prismaUser.create({
			data: {
				email: data.email,
				first_name: data.first_name,
				last_name: data.last_name,
				password: data.password
			},
			select: {
				id: true,
				email: true,
				first_name: true,
				last_name: true,
				status: true,
				created_at: true,
				updated_at: true
			}
		})

		return user
	}
}