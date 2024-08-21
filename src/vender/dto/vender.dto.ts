import { IsString, IsNumber, IsOptional } from 'class-validator';

export class VendorDto {
  @IsString()
  name: string;

  @IsString()
  contactDetails: string;

  @IsString()
  address: string;

  @IsString()
  vendorCode: string;

  @IsNumber()
  @IsOptional()
  onTimeDeliveryRate?: number;

  @IsNumber()
  @IsOptional()
  qualityRatingAvg?: number;

  @IsNumber()
  @IsOptional()
  averageResponseTime?: number;

  @IsNumber()
  @IsOptional()
  fulfillmentRate?: number;
}