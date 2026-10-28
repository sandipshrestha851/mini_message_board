
CREATE TABLE IF NOT EXISTS messages(
    id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(100) NOT NULL ,
    message TEXT NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message)
VALUES
    ('sandip', 'hello guys'),
    ('shiriya', 'hello sandip, how are you!'),
    ('sandy', 'yaya');