Markdown
## Student
- Name: Пахалович Д.О
- Group: 232он

## Практичне заняття №2 — NestJS + PostgreSQL + Redis

## Структура репозиторію
.
├── src/                  # NestJS source code
├── Dockerfile
├── docker-compose.yml
├── .env.example          # шаблон змінних оточення
└── README.md


## Запуск проекту
```bash
cp .env.example .env   # налаштувати значення
docker compose up --build
Перевірка сервісів
Plaintext
NAME                               IMAGE                COMMAND                  SERVICE    STATUS              PORTS
pakhalovychrivnevi-app-1           node:20-alpine       "docker-entrypoint.s…"   app        running (healthy)   0.0.0.0:3000->3000/tcp
pakhalovychrivnevi-postgres-1      postgres:15-alpine   "docker-entrypoint.s…"   postgres   running (healthy)   0.0.0.0:5432->5432/tcp
pakhalovychrivnevi-redis-1         redis:7-alpine       "docker-entrypoint.s…"   redis      running (healthy)   0.0.0.0:6379->6379/tcp
Перевірка PostgreSQL
Plaintext
                                  List of databases
   Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-----------+----------+----------+-------------+-------------+-----------------------
 nestdb    | nestuser | UTF8     | en_US.utf8  | en_US.utf8  | 
(1 row)
Перевірка Redis
Plaintext
PONG
Перевірка застосунку
Plaintext
Hello World! (Connected to DB host: postgres)
Логи NestJS (фрагмент)
Plaintext
[5:46:40 PM] Starting compilation in watch mode...
[5:46:43 PM] Found 0 errors. Watching for file changes.

[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [NestFactory] Starting Nest application...
[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [InstanceLoader] AppModule dependencies initialized +10ms
[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [RoutesResolver] AppController {/}: +3ms
[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [NestApplication] Nest application successfully started +2ms

---

### Що зробити тепер:
1. Збережіть файл `README.md`.
2. Виконайте команди у терміналі, щоб відправити все викладачу:
   ```bash
   git add README.md
   git commit -m "docs: complete README report for Lab 2"
   git push origin Lab1

   