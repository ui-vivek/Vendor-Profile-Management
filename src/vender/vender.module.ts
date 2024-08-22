import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { Vender, VenderSchema } from 'src/models/Vender.model';
import { venderController } from './vender.controller';
import { VenderService } from './vender.service';
import { HistoricalVendorPerformance, HistoricalVendorPerformanceSchema } from 'src/models/Performance.model';
import { PurchaseOrder, PurchaseOrderSchema } from 'src/models/Orders.model';

@Module({
    imports: [
      DatabaseModule,
      MongooseModule.forFeature([{ name: Vender.name, schema: VenderSchema }]),
      MongooseModule.forFeature([{ name: HistoricalVendorPerformance.name, schema: HistoricalVendorPerformanceSchema }]),
      MongooseModule.forFeature([{ name: PurchaseOrder.name, schema: PurchaseOrderSchema }]),
    ],
  controllers: [venderController],
  providers: [VenderService],
  exports: [],
})
export class VenderModule {}
