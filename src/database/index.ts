const { MONGO_DATABASE, MONGO_USERNAME, MONGO_PASSWORD } = process.env;

export const dbConnection = {
  //url: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`,
  //url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@fessportcluster.olip6.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`,
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@fessport.yawiu.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};

/*
const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;
export const dbConnection = {
  url: `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
*/
