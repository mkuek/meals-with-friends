CREATE DATABASE meal_train;

CREATE TABLE train_info(
    train_id SERIAL PRIMARY KEY,
    meal_recipient VARCHAR(255),
    email VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(2),
    zipcode INT,
    phone VARCHAR(2),
    meal_date_start DATE,
    meal_date_end DATE,
    meal_adults INT,
    meal_kids INT,
    meal_delivery_time VARCHAR(255),
    meal_instructions VARCHAR(255),
    meal_favorites VARCHAR(255),
    meal_non_favorite VARCHAR(255),
    meal_allergy VARCHAR(255),
    created TIMESTAMPTZ,
    updated TIMESTAMPTZ
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    created TIMESTAMPTZ,
    train_id SERIAL,
    CONSTRAINT fk_user
    FOREIGN KEY(train_id)
    REFERENCES train_info(train_id)
);

CREATE TABLE meal(
    meal_id SERIAL PRIMARY KEY,
    user_id SERIAL,
    meal_name VARCHAR(255),
    meal_date DATE,
    notes VARCHAR(255),
    created TIMESTAMPTZ,
    updated TIMESTAMPTZ,
    CONSTRAINT fk_meal
    FOREIGN KEY(user_id)
    REFERENCES users(user_id)
);












