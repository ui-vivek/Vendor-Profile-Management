import { Module } from "@nestjs/common";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { DatabaseModule } from "src/database/database.module";
import { MongooseModule } from "@nestjs/mongoose";
import { PurchaseOrder, PurchaseOrderSchema } from "src/models/Orders.model";

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    exports: [],
    imports: [
        DatabaseModule,
        MongooseModule.forFeature([{ name: PurchaseOrder.name, schema: PurchaseOrderSchema }]),
      ],
})


export class OrdersModule { }