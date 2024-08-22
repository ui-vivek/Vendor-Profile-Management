import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Vender } from './Vender.model';

@Schema()
export class HistoricalVendorPerformance extends Document {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Vender' })
  vendor: Vender;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, type: Number })
  onTimeDeliveryRate: number;

  @Prop({ required: true, type: Number })
  qualityRatingAvg: number;

  @Prop({ required: true, type: Number })
  averageResponseTime: number;

  @Prop({ required: true, type: Number })
  fulfillmentRate: number;
}

export const HistoricalVendorPerformanceSchema = SchemaFactory.createForClass(HistoricalVendorPerformance);