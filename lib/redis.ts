import Redis from 'ioredis';

const globalForRedis = globalThis as unknown as {
  redis: Redis | undefined;
};

const redis = globalForRedis.redis ?? new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD, // remove if no auth
  db: 0, // default database
});

if (process.env.NODE_ENV !== 'production') {
  globalForRedis.redis = redis;
}

export default redis;