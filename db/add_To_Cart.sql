insert into cart(quantity, product_id) values (1, $1);
select * from cart
order by product_id asc