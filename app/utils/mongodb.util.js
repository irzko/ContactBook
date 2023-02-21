const { MongoClient } = require("mongodb");

class MongoDB {
  static connect = async (url) => {
    if (this.client) return this.client;
    this.client = await MongoClient.connect(uri);
    return this.client;
  };
}

module.exports = MongoDB;
