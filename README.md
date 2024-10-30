```bash
cd documentation
npm install
npm run start
```

через докер для локальной отладки:

```
docker build . -t docs
docker run --rm -p 3000:3000 docs
```

Подключаться по ссылке http://localhost:3000/