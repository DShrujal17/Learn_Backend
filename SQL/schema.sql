Create table user (
    id varchar(50) Primary key,
    username varchar(50) unique,
    email varchar(50) unique not null,
    password varchar(50) not null
)