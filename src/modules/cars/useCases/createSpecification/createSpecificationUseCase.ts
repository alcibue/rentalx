import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
    @inject("SpecificationsRepository")
    private specicatiosRepository: ISpecificationsRepository) {}
    async execute({ name, description }: IRequest): Promise<void> {
        const specatationAlreadyExists = await this.specicatiosRepository.findByName(  
          name
        );

        if (specatationAlreadyExists) {
            throw new Error("Specification alredy existis");
        }

      await this.specicatiosRepository.create({
        name,
        description,
      });
    }
}

export { CreateSpecificationUseCase };