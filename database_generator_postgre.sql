create database theater_service;

create table authors (
    id serial unique not null primary key ,
    name varchar(60) unique not null
);

create table genres (
    id serial unique  not null primary key ,
    name varchar(50) unique  not null
);

create table plays (
    id serial unique  not null primary key ,
    name varchar(50) not null ,
    author_id int not null ,
    genre_id int not null ,
    foreign key (author_id) references authors (id),
    foreign key (genre_id) references genres (id)
);

create table dates (
    id serial unique  not null primary key ,
    play_id int not null ,
    date date not null ,
    foreign key (play_id) references plays (id)
);

create table logins (
    id serial unique not null primary key ,
    name varchar(70) not null ,
    password varchar(16) not null ,
    role_id int not null ,           -- 1 - user, 2 - courier, 3 - manager, 4 - admin
    email varchar(40) not null unique ,
    phone varchar(20) not null
);

insert into logins (name, password, role_id, email, phone) VALUES ('Solodkov M.A.', '1806', 1, 'solodkov@gmail.com',
                                                                   '+375(29)315-74-25');
insert into logins (name, password, role_id, email, phone) VALUES ('Стольный Д.А.', '1806', 2, 'sema@gmail.com',
                                                                   '+375(33)315-74-26');
insert into logins (name, password, role_id, email, phone) VALUES ('Lipsky D.Y.', '1806', 3, 'lipsky@gmail.com',
                                                                   '+375(33)315-74-27');
insert into logins (name, password, role_id, email, phone) VALUES ('Trofimov E.V.', '1806', 4, 'trofimov@gmail.com',
                                                                   '+375(33)315-74-28');

insert into authors (name) values ('A. Ekborn');
insert into authors (name) values ('A. Dubarau');
insert into authors (name) values ('M. Zadornov');

insert into genres (name) values ('Comedy');
insert into genres (name) values ('Dramatic ballad');
insert into genres (name) values ('Play');

insert into plays (name, author_id, genre_id) VALUES ('Synthesizer love', 1, 1);
insert into plays (name, author_id, genre_id) VALUES (' Do not leave me …', 2, 2);
insert into plays (name, author_id, genre_id) VALUES ('Prince Vitaut', 2, 3);
insert into plays (name, author_id, genre_id) VALUES ('Love adventure ', 3, 1);


insert into dates (play_id, date) VALUES (1, '2020-02-03');
insert into dates (play_id, date) VALUES (1, '2020-02-15');
insert into dates (play_id, date) VALUES (1, '2020-02-27');

insert into dates (play_id, date) VALUES (2, '2020-02-13');
insert into dates (play_id, date) VALUES (2, '2020-02-16');
insert into dates (play_id, date) VALUES (2, '2020-02-25');
insert into dates (play_id, date) VALUES (2, '2020-02-28');

insert into dates (play_id, date) VALUES (2, '2020-02-08');
insert into dates (play_id, date) VALUES (2, '2020-02-12');
insert into dates (play_id, date) VALUES (2, '2020-02-20');

insert into dates (play_id, date) VALUES (2, '2020-02-17');
insert into dates (play_id, date) VALUES (2, '2020-02-24');