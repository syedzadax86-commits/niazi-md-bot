const { MongoClient } = require("mongodb");
let clientPromise;
async function db(){if(!process.env.MONGODB_URL)return null;if(!clientPromise)clientPromise=new MongoClient(process.env.MONGODB_URL).connect();return(await clientPromise).db(process.env.DB_NAME||"baga");}
function json(res,status,data){res.status(status).setHeader("Content-Type","application/json");res.end(JSON.stringify(data));}
function serversFromEnv(){try{return JSON.parse(process.env.SERVERS_JSON||"[]")}catch{return[]}}
async function getServers(){const database=await db();if(database){const rows=await database.collection("pairing_servers").find({enabled:{$ne:false}}).sort({name:1}).toArray();if(rows.length)return rows.map(({_id,...x})=>x)}return serversFromEnv()}
module.exports={db,json,getServers};