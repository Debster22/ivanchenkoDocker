import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<import("./category.entity").Category[]>;
    findOne(id: number): Promise<import("./category.entity").Category>;
    create(body: {
        name: string;
        description?: string;
    }): Promise<import("./category.entity").Category>;
    update(id: number, body: Partial<{
        name: string;
        description: string;
    }>): Promise<import("./category.entity").Category>;
    remove(id: number): Promise<void>;
}
