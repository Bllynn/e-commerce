create table cart(
id serial primary key,
quantity integer,
product_id integer references products(id)
)