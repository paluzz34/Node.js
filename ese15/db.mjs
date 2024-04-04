import pgPromise from "pg-promise";

export const db = pgPromise()("postgres://planetdb:Palu_34@localhost:5432/planets")

export async function createTable() {
    await db.none(`
        
    DROP TABLE IF EXISTS planets;
    
    CREATE TABLE planets (
        id SERIAL PRIMARY KEY NOT NULL ,
        name TEXT NOT NULL ,
        file TEXT
    );
`)

await db.none("INSERT INTO planets (name) VALUES ('Earth')")
await db.none("INSERT INTO planets (name) VALUES ('Mars')")
}

createTable()