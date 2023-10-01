import config from 'config';
import mongoose from 'mongoose';

export default async function connectToDb(){
  try{
    const dbUri = config.get<string>('dbUri')
    await mongoose.connect(dbUri)
  }catch(e){
    process.exit(1)
  }
}
