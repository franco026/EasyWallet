/* 
Base de datos de EasyWallet, propensa a cambios, mejoras o actualizaciones.
Autores: CodeBreakers
Fecha Ultima Actualización: 07/10/2018
*/

DROP TABLE users CASCADE;

CREATE SEQUENCE user_seq
	start with 1
	increment by 1
	maxvalue 9999
	minvalue 1;

CREATE TABLE users(
	id VARCHAR(4) default nextval ('user_seq') NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(30) NOT NULL
);

-----------------------------------------------------------------------------------

DROP TABLE account CASCADE;

CREATE SEQUENCE account_seq
	start with 1
	increment by 1
	maxvalue 9999
	minvalue 1;


CREATE TABLE account(
	id VARCHAR(4) default nextval ('account_seq') NOT NULL PRIMARY KEY,
	id_user VARCHAR(4) NOT NULL,
	account_type VARCHAR(30) NOT NULL,
	initial_balance MONEY NOT NULL,
	state VARCHAR(20) NOT NULL,

	FOREIGN KEY (id_user) REFERENCES users(id)
);

-------------------------------------------------------------------------------------

DROP TABLE category CASCADE;

CREATE SEQUENCE category_seq
	start with 1
	increment by 1
	maxvalue 9999
	minvalue 1;

CREATE TABLE category(
	id VARCHAR(4) default nextval ('category_seq') NOT NULL PRIMARY KEY,
	name VARCHAR(30) NOT NULL
);

-------------------------------------------------------------------------------------

DROP TABLE budget CASCADE;

CREATE SEQUENCE budget_seq
	start with 1
	increment by 1
	maxvalue 9999
	minvalue 1;

CREATE TABLE budget(
	id VARCHAR(4) default nextval ('budget_seq') NOT NULL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	estimated MONEY NOT NULL,
	state MONEY NOT NULL
);

-------------------------------------------------------------------------------------

CREATE SEQUENCE transaction_seq
	start with 1
	increment by 1
	maxvalue 9999
	minvalue 1;

CREATE TABLE transaction(
	id VARCHAR(4) default nextval ('transaction_seq') NOT NULL,
	id_account VARCHAR(4) NOT NULL,
	id_category VARCHAR(4) NOT NULL,
	id_budget VARCHAR(4) NOT NULL,
	transaction_type VARCHAR(10) NOT NULL,
	transaction_date DATE NOT NULL,
	payment MONEY NOT NULL,
	description VARCHAR(30),

	CONSTRAINT transaction_pk PRIMARY KEY (id, id_account),
	
	CONSTRAINT transaction_fk1 FOREIGN KEY (id_account) REFERENCES account(id)
	ON UPDATE NO ACTION ON DELETE NO ACTION,

	CONSTRAINT transaction_fk2 FOREIGN KEY (id_budget) REFERENCES budget(id)
	ON UPDATE NO ACTION ON DELETE NO ACTION,

	CONSTRAINT transaction_fk3 FOREIGN KEY (id_category) REFERENCES category(id)
	ON UPDATE NO ACTION ON DELETE NO ACTION
);