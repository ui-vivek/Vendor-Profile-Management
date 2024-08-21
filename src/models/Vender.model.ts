import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class Vender extends Document {
  @Prop({ required: true, unique: false })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  contactDetails: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  address: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty()
  @IsString()
  vendorCode: string;

  // Optional performance metrics
  @Prop({ isNumber: true, min: 0, max: 100 })
  @IsOptional()
  @IsNumber()
  onTimeDeliveryRate?: number;

  @Prop({ isNumber: true })
  @IsOptional()
  @IsNumber()
  qualityRatingAvg?: number;

  @Prop({ isNumber: true })
  @IsOptional()
  @IsNumber()
  averageResponseTime?: number;

  @Prop({ isNumber: true, min: 0, max: 100 })
  @IsOptional()
  @IsNumber()
  fulfillmentRate?: number;

}

export const VenderSchema = SchemaFactory.createForClass(Vender);