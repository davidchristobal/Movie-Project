DROP TABLE IF EXISTS api_data;

CREATE TABLE api_data (
  id            INT,
  adult         BOOLEAN,
  backdrop_path TEXT,
  genre_ids     INT[],
  genre_names   TEXT[],
  keywords      TEXT[],
  cast_names    TEXT[],
  original_language TEXT,
  original_title TEXT,
  overview      TEXT,
  popularity    FLOAT,
  poster_path   TEXT,
  release_date  TEXT,
  title         TEXT,
  video         BOOLEAN,
  vote_average  FLOAT,
  vote_count    INT,
  PRIMARY KEY (id)
);