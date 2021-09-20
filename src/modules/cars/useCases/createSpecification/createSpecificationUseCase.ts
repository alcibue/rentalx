import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specicatiosRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        const specatationAlreadyExists = this.specicatiosRepository.findByName(  
          name
        );

        if (specatationAlreadyExists) {
            throw new Error("Specification alredy existis");
        }

      this.specicatiosRepository.create({
        name,
        description,
      });
    }
}

export { CreateSpecificationUseCase };