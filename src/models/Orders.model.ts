import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Vender } from './Vender.model';

@Schema()
export class PurchaseOrder extends Document {
  @Prop({ required: true, unique: true })
  poNumber: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Vendor' })
  vendor: Vender;

  @Prop({ required: true })
  orderDate: Date;

  @Prop({ required: true })
  deliveryDate: Date;

  @Prop({ type: SchemaTypes.Mixed })
  items: any;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true, enum: ['pending', 'completed', 'canceled'] })
  status: string;

  @Prop({ isNumber: true })
  qualityRating: number;

  @Prop({ required: true })
  issueDate: Date;

  @Prop()
  acknowledgmentDate: Date;
}

export const PurchaseOrderSchema = SchemaFactory.createForClass(PurchaseOrder);