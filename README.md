# **Next.js + PostgreSQL + Prisma ToDo App**

A modern ToDo application built with **Next.js**, **PostgreSQL**, and **Prisma**. This project serves as a practice platform to integrate a modern front-end framework with a relational database.

## **Features**
- **Next.js** for server-side rendering and client-side hydration.
- **PostgreSQL** for a robust and reliable relational database.
- **Prisma** for type-safe database interaction and migrations.

---

## **Getting Started**

### Prerequisites
- **Node.js** (v16 or later)
- **PostgreSQL** (v14 or compatible)
- Package manager of your choice (`npm`, `yarn`, `pnpm`, `bun`)

---

### **Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
   
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

### **Database Setup**
1. Install and launch PostgreSQL:
   ```bash
   brew install postgresql@14
   brew services start postgresql@14
   ```
2. Initialize the database (if not already initialized):
   ```bash
   initdb /opt/homebrew/var/postgresql@14
   ```
3. Initialize the database (if not already initialized):
   ```bash
   CREATE TABLE todo_status (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) UNIQUE NOT NULL
   );
   
   CREATE TABLE todo (
   id SERIAL PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   details TEXT,
   created_at TIMESTAMP DEFAULT NOW(),
   updated_at TIMESTAMP DEFAULT NOW(),
   status_id INT REFERENCES todo_status(id) DEFAULT 1
   );
   ```  
---

### **Prisma Setup**
1. Configure the database connection in .env:
   ```bash
   DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:5432/<DATABASE_NAME>"
   ```
2. Pull the database schema:
   ```bash
   npx prisma db pull
   ```
3. Apply migrations:
   ```bash
   npx prisma migrate dev --name init_schema
   ```
4. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

---
### **Run the Application**
Start the development server:
```bash
npm run dev
# or
yarn dev
```
Visit http://localhost:3000 to see the app in action.

---

### **Project Structure**
```bash
.
├── lib/                 # Wrappers and abstractions for external libraries 
├── prisma/
│   └── schema.prisma    # Prisma schema definition
├── src/
├── components/          # Reusable React components
└── public/              # Static assets

```