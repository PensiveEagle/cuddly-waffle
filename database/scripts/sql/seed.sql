CREATE TABLE IF NOT EXISTS suggestions (
    suggestion_id VARCHAR PRIMARY KEY,
    suggestion_details VARCHAR NOT NULL,
    involvement_flag VARCHAR NOT NULL,
    suggester_name VARCHAR,
    suggester_email VARCHAR,
    votes INTEGER NOT NULL
);

INSERT INTO suggestions ( suggestion_id, suggestion_details, involvement_flag, suggester_email, suggester_name, votes )
VALUES
    ( 'test000', 'test', 'Yes', 'test@example.gov.uk', 'test', '0' );

WITH json_data AS (
    SELECT
        jsonb_array_elements(
            (SELECT pg_read_file('/database/data/dummy_data.json')::jsonb)
        ) AS data
)
INSERT INTO suggestions ( suggestion_id, suggestion_details, involvement_flag, suggester_email, suggester_name, votes )
SELECT
    (data->>'suggestion_id')::VARCHAR,
    (data->>'suggestion_details')::VARCHAR,
    (data->>'involvement_flag')::VARCHAR,
    (data->>'suggester_email')::VARCHAR,
    (data->>'suggester_name')::VARCHAR,
    (data->>'votes')::INTEGER
FROM
    json_data;