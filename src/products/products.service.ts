import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  // Отримання всіх продуктів
  findAll() {
    return this.productRepo.find({ relations: { category: true } });
  }

  // Пошук одного продукту (виправляє помилку findOne)
  async findOne(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: { category: true },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  // Створення продукту
  create(data: any) {
    return this.productRepo.save(data);
  }

  // Оновлення продукту (виправляє помилку update)
  async update(id: number, data: any) {
    const product = await this.findOne(id); // Перевіряємо чи існує
    const updatedProduct = Object.assign(product, data);
    return this.productRepo.save(updatedProduct);
  }

  // Видалення продукту (виправляє помилку remove)
  async remove(id: number) {
    const product = await this.findOne(id);
    return this.productRepo.remove(product);
  }
}