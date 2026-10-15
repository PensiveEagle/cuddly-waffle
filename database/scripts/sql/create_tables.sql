CREATE TABLE IF NOT EXISTS suggestions (
    suggestion_id VARCHAR PRIMARY KEY,
    suggestion_details VARCHAR NOT NULL,
    involvement_flag VARCHAR NOT NULL,
    suggester_name VARCHAR,
    suggester_email VARCHAR,
    votes INTEGER NOT NULL
);