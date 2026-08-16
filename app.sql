CREATE DATABASE bank_software;
USE bank_software;

CREATE TABLE users (
    id integer PRIMARY KEY AUTO_INCREMENT UNIQUE,
    name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL UNIQUE,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users(name, email, password)
VALUES
    ("Admin", "admin@example.com", "admin1234"),
    ("Dariyan", "dariyan@example.com", "dariyan4321"),
    ("Stoyan", "stoyan@example.com", "stoyan9876"),
    ("Slavi", "slavi@example.com", "slavi0000");