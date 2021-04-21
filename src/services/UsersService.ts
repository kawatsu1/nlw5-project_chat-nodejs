import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
	private usersRepository: Repository<User>;

	constructor() {
		this.usersRepository = getCustomRepository(UsersRepository);
	}

	async create(email: string) {
		// check if user exists
		const userExists = await this.usersRepository.findOne({
			email,
		});

		// Se existir, retornar user
		if (userExists) {
			return userExists;
		}

		const user = this.usersRepository.create({
			email,
		});

		await this.usersRepository.save(user);

		// se não existir, salva na db
		return user;
	}
}

export { UsersService };