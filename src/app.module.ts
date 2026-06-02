import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories/category.entity';
import { Product } from './products/product.entity';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Category, Product],
      synchronize: false, // ВИКЛЮЧЕНО для балів
      migrationsRun: true, // Автозапуск міграцій
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    }),
    CategoriesModule,
    ProductsModule,
  ],
})
export class AppModule {}