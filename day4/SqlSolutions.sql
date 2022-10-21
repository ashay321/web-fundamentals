select user_name from "users" where user_id =
(select user_id from "transactions" where status=true group by user_id having sum(amount)=
(select max(mycount) from (select user_id, sum(amount)
					as mycount from "transactions" where status=true group by user_id) "transactions"));
					
--[User with maximum payment]


select user_name from "users" where user_id =
(select user_id from "transactions" where status=true group by user_id having sum(amount)=
(select min(mycount) from (select user_id, sum(amount)
					as mycount from "transactions" where status=true group by user_id) "transactions"));
					
--[User with minimum payment]


(select product_id from "orders" group by product_id having count(product_id)=
(select max(mycount) from (select product_id, count(product_id)
					as mycount from "orders" group by product_id) "products"));

--[superhit]


select * from "products" 
full outer join "orders" 
	on "orders".product_id = "products".product_id 
	where "orders".product_id IS NULL;


--(product with no order)


select *
from "users" inner join "transactions" 
	on "users".user_id = "transactions".user_id 
	and status = false;

--[Failed transaction of a user]


select sum(discount) from coupons 
inner join "orders" 
on coupons.coupon_id = "orders".coupon_id 
and user_id=3 
and coupons.expiry > "orders".order_date 
and "orders".order_date > current_date - interval '6 month'

--[Discount availed by a user]


select * from coupon where expirydate<current_date

--[expired coupons]


select * from "order" where quantity>4;

--[order quantity more than 4]



select category_id,category_name from category where category_id=
(select category_id from 
  products inner join "orders" on products.product_id = "orders".product_id
 	where order_date>current_date - interval '3 month' group by category_id having count(category_id)=
		(select max(mycount) from 	
				(select category_id,count(category_id) as mycount from 
  					products inner join "orders" on products.product_id = "orders".product_id
 						where order_date>current_date - interval '3 month' group by category_id) category) );

--[maximum ordered category for last quarter]

 select category_id,category_name from category where category_id=
(select category_id from 
  products inner join "orders" on products.product_id = "orders".product_id
 	where order_date>current_date - interval '3 month' group by category_id having count(category_id)=
		(select min(mycount) from 	
				(select category_id,count(category_id) as mycount from 
  					products inner join "orders" on products.product_id = "orders".product_id
 						where order_date>current_date - interval '3 month' group by category_id) category) );

--[minimum ordered category for last quarter]

select * from "users" 
full outer join "orders" 
	on "orders".user_id = "users".user_id 
	where "orders".user_id IS NULL;

--[User who has not placed any order]

select * from "transactions" where user_id=1 and status=false;

--[Transactions failed for a user]



select *
from "users" inner join "transactions" 
	on "users".user_id = "transactions".user_id 
	and status = false;

--[All users whose transactions have failed]

select * from "users" 
full outer join "orders" 
	on "orders".user_id = "users".user_id 
	where "orders".user_id IS NULL;

--[User with no transaction]

select * from "users"
where DATE_PART('day',birthday) = DATE_PART('day',current_date)
    and DATE_PART('month',birthday) = DATE_PART('month',current_date)
	and DATE_PART('year',birthday) = DATE_PART('year',current_date)

--[User whose birthday is today]
