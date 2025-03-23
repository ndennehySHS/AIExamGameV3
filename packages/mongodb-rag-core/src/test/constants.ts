const IP = "127.0.0.1";
const REPLICA_SET_PORT = 27018;
const SERVER_PORT = 27017;
const MONGO_MEMORY_REPLICA_SET_URI = `mongodb://${IP}:${REPLICA_SET_PORT}/?replicaSet=testset`;
const MONGO_MEMORY_SERVER_URI = `mongodb://${IP}:${SERVER_PORT}/`;

export {
  IP,
  REPLICA_SET_PORT,
  SERVER_PORT,
  MONGO_MEMORY_REPLICA_SET_URI,
  MONGO_MEMORY_SERVER_URI,
};
