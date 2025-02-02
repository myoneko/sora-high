## Sora-High

### 1. Requrements

> -   MySQL server
> -   NodeJS `[v16.16.0]`

<br>

---

### 2. Setup

```shell
npm install
npm run setup
```

-   Import `/setup/import.sql` into the MySQL Database
-   Update/configure `/.env` file with new credentials
    -   `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASS`

<br>

---

### 3. Start the server app

```shell
npm start
```

Sora-High is serverd at `http://localhost:3000/`  
you may change the `SERVER_PORT` in `/.env`
