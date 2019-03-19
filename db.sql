CREATE TABLE users ( 
   user_id      SERIAL      PRIMARY KEY,
   first_name   VARCHAR(50) NOT NULL,
   last_name    VARCHAR(50) NOT NULL
);


CREATE TABLE topic (
   topic_id   SERIAL       PRIMARY KEY,
   title      varchar(255) NOT NULL,
   creator    INTEGER REFERENCES users(user_id)
);

INSERT INTO users (user_id, first_name, last_name) 
VALUES
(
   DEFAULT,
   'Zac',
   'Radford'
);

INSERT INTO topic (topic_id, title, creator) 
VALUES
(
   DEFAULT,
   'How do we make sure we all get our homework done?',
   1
);