import pg from "pg";

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString: "postgres://feyuiyjw:26C8nnLSg3AtztdVoCWpYy1XOWRVaQGp@castor.db.elephantsql.com/feyuiyjw"
    });
    global.connection = pool;
    return pool.connect();
}

export {
    connect
}