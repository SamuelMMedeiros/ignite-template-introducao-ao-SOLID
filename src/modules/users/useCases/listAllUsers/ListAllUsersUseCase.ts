import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found");
    }

    const isAdminUser = user.admin;

    if (!isAdminUser) {
      throw new Error("User is not an administrator");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
