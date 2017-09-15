### setup
    npm install -g json-server
    npm install -g browser-sync
    npm install -g bower

## install dependences
    bower install

## start server
    json-server --watch --port 3000 backend/ledger.json

## start frontend
    browser-sync start --server --files " * "

## reset ledger
    backend/reset
