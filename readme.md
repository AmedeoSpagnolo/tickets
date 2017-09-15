### setup
    npm install -g json-server
    npm install -g browser-sync

## start server
    json-server --watch --port 3000 ledger.json

## start frontend
    browser-sync start --server --files *
