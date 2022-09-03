import mysql from 'mysql';

/**
 * MySQL hostname
 * @public
 */
export type MysqlHost = string

/**
 * MySQL user
 * @public
 */
export type MysqlUser = string

/**
 * MySQL password
 * @public
 */
export type MysqlPassword = string

/**
 * MySQL database name
 * @public
 */
export type MysqlDbName = string

/**
 * Create a new MongoDB connection
 *
 * @example
 * ```
 * new MongoDBConnector(
 *    'mongodb://mongodb:27017/',
 *    'subito',
 *    {
 *      authSource: 'admin',
 *      replicaSet: 'rs0',
 *    }
 * );
 * ```
 *
 * @param link - MongoDB server link
 * @param dbName - Name of the mongodb database
 * @param params - Connection parameters
 * @param options - Connection options
 *
 * @public
 */
class Connector {
  protected db: any;

  protected host: MysqlHost;

  protected user: MysqlUser;

  protected password: MysqlPassword;

  protected database: MysqlDbName;

  constructor(
    host: MysqlHost,
    user: MysqlUser,
    password: MysqlPassword,
    database: MysqlDbName,
  ) {
    this.db = null;
    this.host = host;
    this.user = user;
    this.password = password;
    this.database = database;
  }

  /**
   * Connect to the DB
   *
   * @returns
   *
   * @public
   */
  public async connect() {
    try {
      const {
        host, user, password, database,
      } = this;

      const client = mysql.createConnection({
        host,
        user,
        password,
        database,
      });
      this.db = client.connect();

      return this.db;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  /**
   * Get the connection
   *
   * @public
   */
  public get() {
    return this.db;
  }
}

export default Connector;
