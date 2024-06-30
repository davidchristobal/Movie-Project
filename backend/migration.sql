DROP TABLE IF EXISTS api_data;

CREATE TABLE api_data (
  id            INT NULL ,
  type          INT NULL,
  name          TEXT  NULL,
  adult         BOOLEAN NULL,
  backdrop_path TEXT NULL,
  genre_ids     INT[] NULL,
  genre_names   TEXT[] NULL,
  keywords      TEXT[] NULL,
  cast_names    TEXT[] NULL,
  media_type    TEXT NULL,
  origin_country TEXT[] NULL,
  original_language TEXT NULL,
  original_title TEXT NULL,
  overview      TEXT NULL,
  popularity    FLOAT NULL,
  poster_path   TEXT NULL,
  release_date  TEXT NULL,
  title         TEXT NULL,
  video         BOOLEAN NULL,
  vote_average  FLOAT NULL,
  vote_count    INT NULL,
  video_key     TEXT NULL,
  PRIMARY KEY (id)
);