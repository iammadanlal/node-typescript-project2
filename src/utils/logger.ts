import logger from 'pino';
import config from 'config';
import dayjs from 'dayjs';

const log = () => {
  const level = config.get<string>("logLevel")
  logger({
    transport: {
      target: 'pino-pretty'
    },level,
    base: {
      pid: false
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
  });
}

export default log;