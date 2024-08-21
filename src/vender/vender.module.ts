import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { Vender, VenderSchema } from 'src/models/Vender.model';
import { venderController } from './vender.controller';
import { VenderService } from './vender.service';

@Module({
    imports: [
      DatabaseModule,
      MongooseModule.forFeature([{ name: Vender.name, schema: VenderSchema }]),
    ],
  controllers: [venderController],
  providers: [VenderService],
  exports: [],
})
export class VenderModule {}
