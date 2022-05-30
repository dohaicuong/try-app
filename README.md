## Motivations
This is the project where I try to new tools and put them together

## Getting start
- Spin up database
```
docker compose up -d
```

- Run database migration
```
cd backend
cp .env.example .env
npx prisma migrate dev
```

- Start backend
```
pnpm i
pnpm dev
```

- Start frontend
```
pnpm i
pnpm dev
```