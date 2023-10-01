import config from 'config';
import mongoose from 'mongoose';
import log from './logger';

export default async function connectToDb(){
  const dbUri = config.get<string>('dbUri')
  try{
    await mongoose.connect(dbUri)
    log.info('Connected to DB');
  }catch(e){
    process.exit(1)
  }
}
