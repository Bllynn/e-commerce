create table cart(
id serial primary key not null,
quantity integer not null,
product_id integer references products(id) UNIQUE not null
)