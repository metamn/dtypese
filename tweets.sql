DROP TABLE tweets;
DROP TABLE users;

CREATE TABLE users(
    user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE tweets(
    tweet_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    text TINYTEXT,
    date DATETIME NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users (name) VALUES ("Mark");
INSERT INTO users (name) VALUES ("Csongor");

INSERT INTO tweets (text, date, user_id) VALUES ("This is Mark's tweet #1", now(), 1);
INSERT INTO tweets (text, date, user_id) VALUES ("This is Csongor's tweet #1", now(), 2);

INSERT INTO tweets (text, date, user_id) VALUES ("This is Mark's tweet #2", now(), 1);
INSERT INTO tweets (text, date, user_id) VALUES ("This is Csongor's tweet #2", now(), 2);

INSERT INTO tweets (text, date, user_id) VALUES ("This is Mark's tweet #3", now(), 1);
INSERT INTO tweets (text, date, user_id) VALUES ("This is Csongor's tweet #3", now(), 2);

INSERT INTO tweets (text, date, user_id) VALUES ("This is Mark's tweet #4", now(), 1);
INSERT INTO tweets (text, date, user_id) VALUES ("This is Csongor's tweet #4", now(), 2);

SELECT users.name, tweets.text, tweets.date FROM tweets INNER JOIN users ON users.user_id = tweets.user_id WHERE users.name = "Csongor" ORDER BY tweets.date ASC