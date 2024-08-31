import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis({
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
  maxRetriesPerRequest: null,
});

const myQueue = new Queue("foo", { connection });

async function addJobs() {
  await myQueue.add("myJobName", { 1: "hello" });
  await myQueue.add("myJobName", { 2: "world" });
}

addJobs();

import { Worker } from "bullmq";

const worker = new Worker(
  "foo",
  async (job) => {
    // Will print { foo: 'bar'} for the first job
    // and { qux: 'baz' } for the second.
    console.log(job.data);
  },
  { connection }
);
