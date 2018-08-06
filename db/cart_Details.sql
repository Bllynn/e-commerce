SELECT cart.product_id, cart.quantity, products.product_name, products.product_image, products.product_price
FROM cart
LEFT OUTER JOIN products
ON cart.product_id = products.id;