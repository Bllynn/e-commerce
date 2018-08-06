update cart
set quantity = quantity - 1
where product_id = $1;
select * from cart
where product_id=$1