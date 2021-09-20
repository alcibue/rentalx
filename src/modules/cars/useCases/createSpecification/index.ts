import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";



const specificatinosRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificatinosRepository)

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController }