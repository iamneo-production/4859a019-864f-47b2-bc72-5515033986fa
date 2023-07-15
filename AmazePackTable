create database AmazePack
use AmazePack
create table ProductModel(
	id int identity(1,1) primary key,
	productId as 'Product' + right('000000' + cast(id as varchar(5)),5),
	productName varchar(60),
	price varchar(20),
	description varchar(8000),
	imageurl varchar(8000),
	quantity varchar(60),
)

Create table UserModel(
id int identity(1,1) primary key,
userId as 'User' + right('000000' + cast(id as varchar(5)),5),
email varchar(50),
password varchar(20),
username varchar(20),
mobileNumber varchar(10),
active bit,
role varchar(20));


create table CartModel(
    id int identity(1,1) primary key,
	cartItemID as 'Cart' + right('000000' + cast(id as varchar(5)),5),
    userId varchar(20),
	productName varchar(60),
	quantity int,
	price varchar(60)
);

create table OrderModel(
	id int identity(1,1) primary key,
	orderId as 'order' + right('000000' + cast(id as varchar(5)),5),
	userId varchar(10),
	productName varchar(60),
	totalPrice varchar(60),
	quantity int,
	status varchar(60),
	price varchar(60)
)
create table LoginModel(
	email varchar(50),
	password varchar(20)
)
