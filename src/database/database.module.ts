import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [ MongooseModule.forRoot(process.env.MONGO_DB_URL || 'mongodb://localhost:27017/mydatabase'),],
  exports: [MongooseModule], 
    })

export class DatabaseModule {}
