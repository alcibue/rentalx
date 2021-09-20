import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor( private categoriesRepository:ICategoriesRepository){}
    execute({ name, description}: IRequest): void {
        const categoriesAlredyExists = this.categoriesRepository.findByName(name);

        if (categoriesAlredyExists) {
            throw new Error("Category alredy exists")
        }

    this.categoriesRepository.create({name, description});

    }
}

export { CreateCategoryUseCase }