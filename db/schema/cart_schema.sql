create table cart(
id serial primary key not null,
quantity integer not null,
product_id integer references wizard_products(id) UNIQUE not null
)