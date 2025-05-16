# zbor-registar
# Jedinstveni registar zajednice

Ovaj projekat ima za cilj da pruži **otvoreni registar** javnih aktivnosti i odluka u organizacijama, udruženjima, inicijativama i zajednicama. 

Projektom upravlja **javna skupština** i svi doprinosi su dobrodošli pod uslovima definisanim u `GOVERNANCE.md`.

## 📂 Kategorije

Aplikacija je organizovana po temama:
- **Zapisnici** – beleške sa sastanaka
- **Odluke** – formalne odluke koje su donete
- **Problemi** – prijavljeni problemi iz zajednice
- **Akcije** – konkretni koraci koje neko treba da preduzme

Svaka kategorija ima:
- Pretragu
- Listu unosa
- Detaljnu stranicu

## 🛠️ Tehnologije (predlog)

- Frontend: React (Next.js), Vue ili Svelte
- Backend: Node.js (Express), Laravel ili Django
- Baza: PostgreSQL
- API: REST ili GraphQL
- Pretraga: Full-text u bazi (npr. PostgreSQL `tsvector`)

## 🗂️ Struktura projekta

```
unified-registry/
├── apps/
│   ├── frontend/    # React Native aplikacija
│   ├── desktop/     # Electron omot za desktop
│   └── backend/     # Express API
├── database/
│   └── init.sql     # Inicijalna SQL skripta
├── .github/         # GitHub Actions
├── package.json     # Glavni package
├── pnpm-workspace.yaml
└── README.md
```

## ⚙️ Pokretanje aplikacije (Hello World)

### 1. Kloniraj repozitorijum

```bash
git clone https://github.com/your-username/unified-registry.git
cd unified-registry
```

### 2. Instalirajte odgovorajuću verziju Node-a

```bash
nvm use
```

Ako nemate instaliran NVM (**N**ode**V**ersion**M**anager) paket, posetite [njihov GitHub repozitorijum](https://github.com/nvm-sh/nvm#installing-and-updating) za više informacija.

### 3. Instaliraj PNPM

```bash
npm install -g pnpm
```

### 4. Instaliraj zavisnosti

```bash
pnpm install
```

### 5. Pokreni PostgreSQL i inicijalizuj bazu

Pokreni PostgreSQL server i izvrši SQL skriptu:

```bash
psql -U postgres
CREATE DATABASE registar;
\c registar
\i database/init.sql
```

### 6. Pokreni backend

```bash
cd apps/backend
pnpm dev
```

### 7. Pokreni frontend

```bash
cd apps/frontend
pnpm start
```

### 8. Pokreni desktop aplikaciju

```bash
cd apps/desktop
pnpm start
```

## ✅ Provera

Otvorite aplikaciju na željenoj platformi. Trebalo bi da vidite poruku:

```
Zdravo, sveta zajednico!
```

## 🤝 Učešće

Pogledaj `CONTRIBUTING.md` ako želiš da doprineseš.

## 🏛️ Upravljanje projektom

Sve odluke se donose na zboru. Detalje potraži u `GOVERNANCE.md`.

## 📄 Licenca

Projekat je pod licencom Apache 2.0.

