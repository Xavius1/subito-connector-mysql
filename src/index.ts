/**
 * Handle MySQL connections into Subito micro services
 *
 * @packageDocumentation
 */
export { default as Connector } from './Connector.js';

// Types
export type {
  MysqlHost, MysqlUser, MysqlPassword, MysqlDbName,
} from './Connector.js';
