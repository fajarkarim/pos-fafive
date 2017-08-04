# pos-fafive
simple Point of sale software

## API End Point

### Inventory
Method | URL | description
------------ | ------------- |
GET | ```/api/inventories/``` | get all inventory
GET | ```/api/inventories/:id``` | get One inventory
GET | ```/api/inventories/category/:name``` | get inventories based on category
POST | ```/api/inventories/``` | create new inventory
POST | ```/api/inventories/seed``` | seed all inventory
PUT | ```/api/inventories/:id``` | edit new inventory
DELETE | ```/api/inventories/:id``` | delete an inventory
DELETE | ```/api/inventories/clear``` | delete all inventory

### transactions
Method | URL | description
------------ | ------------- |
GET | ```/api/transactions/``` | get all transaction
GET | ```/api/transactions/:id``` | get One transaction
POST | ```/api/transactions/checkout``` | create new transaction
PUT | ```/api/transactions/:id``` | edit new transaction
DELETE | ```/api/transactions/:id``` | delete an transaction


### users
Method | URL | description
------------ | ------------- |
GET | ```/api/users/``` | get all user
GET | ```/api/users/:id``` | get One user
POST | ```/api/users/``` | create new user
POST | ```/api/users/login``` | login user
POST | ```/api/users/register``` | register new user
PUT | ```/api/users/:id``` | edit new user
DELETE | ```/api/users/:id``` | delete an user
