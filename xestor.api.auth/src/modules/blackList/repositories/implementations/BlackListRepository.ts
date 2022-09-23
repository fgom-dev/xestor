import { prisma } from "../../../../prisma/client";
import { IBlackListOut, IBlackListRepository } from "../IBlackListRepository";

export class BlackListRepository implements IBlackListRepository {
	constructor(private prismaBlacklist = prisma.blacklist) { }

	async insert(token: string): Promise<IBlackListOut> {
		const blackList = await this.prismaBlacklist.create({
			data: {
				token
			}
		})

		return blackList
	}
}
