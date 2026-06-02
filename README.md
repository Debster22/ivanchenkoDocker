## Student
- Name: <Пахалович Д.О>
- Group: <232/2 он>
 
## Практичне заняття №4 — DTO + class-validator + Pipes
 
### Структура репозиторію
```
.
├── src/
│   ├── categories/
│   │   ├── dto/
│   │   │   ├── create-category.dto.ts
│   │   │   └── update-category.dto.ts
│   │   ├── category.entity.ts
│   │   ├── categories.module.ts
│   │   ├── categories.service.ts
│   │   └── categories.controller.ts
│   ├── products/
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   └── update-product.dto.ts
│   │   ├── product.entity.ts
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   │   └── products.controller.ts
│   ├── common/
│   │   └── pipes/
│   │   	└── trim.pipe.ts
│   ├── migrations/
│   ├── data-source.ts
│   ├── main.ts
│   └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md
```
 
### Запуск проекту
```bash
cp .env.example .env
docker compose up --build
```
 
### Тест валідації — порожнє ім'я категорії
```
{"message":["name must be longer than or equal to 2 characters"],"error":"Bad Request","statusCode":400}
<вивід curl POST /api/categories з {"name": ""}>
```
 
### Тест валідації — від'ємна ціна продукту
```
{"message":["price must not be less than 0.01"],"error":"Bad Request","statusCode":400}
<вивід curl POST /api/products з {"name": "Test", "price": -5}>
```
 
### Тест валідації — зайве поле
```
{"message":["property isAdmin should not exist"],"error":"Bad Request","statusCode":400}
<вивід curl POST /api/categories з {"name": "Test", "isAdmin": true}>
```
 
### Тест TrimPipe
```
{"id": 1, "name": "Trimmed", "description": null}
<вивід curl POST /api/categories з {"name": "  Trimmed  "}>
```
 
### Тест валідне створення продукту
```
{"id": 1, "name": "iPhone 16", "price": 999.99, "stock": 50, "category": {"id": 1}}
<вивід curl POST /api/products з валідними даними>
```
