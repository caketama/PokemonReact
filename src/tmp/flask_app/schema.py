import sqlite3

def schema(dbpath="pokemon.db"):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()
        sql = """CREATE TABLE users (
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                username VARCHAR,
                password_hash VARCHAR,
                auth_token VARCHAR
            );"""
        cursor.execute(sql)

        sql = """CREATE TABLE teams (
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                user_pk INTEGER,
                image_path VARCHAR,
                number INTEGER,
                name VARCHAR
            );"""
        cursor.execute(sql)

if __name__ == "__main__":
    schema()