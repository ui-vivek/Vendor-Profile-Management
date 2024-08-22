import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VenderModule } from './vender/vender.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [VenderModule,OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
