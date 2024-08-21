import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VenderModule } from './vender/vender.module';

@Module({
  imports: [VenderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
