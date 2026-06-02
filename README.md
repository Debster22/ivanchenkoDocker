## Student
- Name: Ivanchenko
- Group: 232/2 ОН

## Практичне заняття №2 — NestJS + PostgreSQL + Redis

Розширено середовище з Практичної №1: до Docker Compose додано три сервіси —
застосунок на **NestJS**, базу даних **PostgreSQL** та **Redis** для кешування.
Проект повністю запускається через Docker Compose.

> ⚠️ `.env` використовується тільки для навчальних цілей і не містить реальних
> секретів. У git закомічено лише `.env.example` (шаблон), сам `.env` додано до
> `.gitignore`.

## Структура репозиторію
```
.
├── src/              # NestJS source code
├── test/             # e2e-тести NestJS
├── Dockerfile        # development-образ для NestJS (node:20-alpine + @nestjs/cli)
├── docker-compose.yml
├── .env.example      # шаблон змінних оточення
├── .gitignore
└── README.md
```

## Запуск проекту
```bash
cp .env.example .env   # за потреби налаштувати значення
docker compose up --build
```

## Перевірка сервісів
```text
NAME                          STATUS
ivanchenkodocker-app-1        Up 31 seconds
ivanchenkodocker-postgres-1   Up 47 seconds (healthy)
ivanchenkodocker-redis-1      Up 47 seconds (healthy)
```

## Перевірка PostgreSQL
```text
$ docker compose exec postgres psql -U nestuser -d nestdb -c '\l'
                                                      List of databases
   Name    |  Owner   | Encoding | Locale Provider |  Collate   |   Ctype    | ICU Locale | ICU Rules |   Access privileges
-----------+----------+----------+-----------------+------------+------------+------------+-----------+-----------------------
 nestdb    | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
 postgres  | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
 template0 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/nestuser          +
           |          |          |                 |            |            |            |           | nestuser=CTc/nestuser
 template1 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/nestuser          +
           |          |          |                 |            |            |            |           | nestuser=CTc/nestuser
(4 rows)
```

## Перевірка Redis
```text
$ docker compose exec redis redis-cli ping
PONG
```

## Перевірка застосунку
```text
$ curl http://localhost:3000
Hello World!
```

## Логи NestJS (фрагмент)
```text
[Nest] LOG [NestFactory] Starting Nest application...
[Nest] LOG [InstanceLoader] TypeOrmModule dependencies initialized
[Nest] LOG [InstanceLoader] ConfigHostModule dependencies initialized
[Nest] LOG [InstanceLoader] AppModule dependencies initialized
[Nest] LOG [InstanceLoader] ConfigModule dependencies initialized
[Nest] LOG [InstanceLoader] CacheModule dependencies initialized
[Nest] LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized
[Nest] LOG [RoutesResolver] AppController {/}:
[Nest] LOG [RouterExplorer] Mapped {/, GET} route
[Nest] LOG [NestApplication] Nest application successfully started
```

## Технічні примітки
- `Dockerfile` використовує `node:20-alpine` (легший образ ~170MB) з глобально
  встановленим `@nestjs/cli`.
- PostgreSQL підключено через **TypeORM** (`@nestjs/typeorm`, `typeorm`, `pg`),
  `synchronize: true` — лише для розробки.
- Redis підключено через **CacheModule** (`@nestjs/cache-manager`).
  Оскільки в проекті використовується `cache-manager` v7, store налаштовано через
  `@keyv/redis` (`createKeyv(...)`) — це актуальний спосіб підключення Redis для
  NestJS 11, що замінює застарілий `cache-manager-redis-yet`.
- `depends_on` з `condition: service_healthy` гарантує, що `app` стартує лише
  після того, як `postgres` і `redis` стали healthy.
```text
docker --version
Docker version 27.4.1, build b9d17ea

docker compose version
Docker Compose version v2.32.1
```
