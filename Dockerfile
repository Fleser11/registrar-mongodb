

FROM mongodb/mongodb-community-server:latest
COPY courseCatalog.csv /data/courseCatalog.csv
COPY 01_create_collections.js /docker-entrypoint-initdb.d/
COPY 02_load_data.sh /docker-entrypoint-initdb.d/
ENV MONGO_INITDB_DATABASE=registrar
