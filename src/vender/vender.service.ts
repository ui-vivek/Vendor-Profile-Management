import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Vender } from "src/models/Vender.model";
import { HistoricalVendorPerformance } from "src/models/Performance.model";
import { PurchaseOrder } from "src/models/Orders.model";

@Injectable()

export class VenderService {

  constructor(@InjectModel('Vender') private readonly VenderModel: Model<Vender>,@InjectModel('HistoricalVendorPerformance') private readonly HistoricalVendorPerformance: Model<HistoricalVendorPerformance>,
  @InjectModel('PurchaseOrder') private readonly PurchaseOrderModel: Model<PurchaseOrder>){

  }

  async createVender(venderData){
    try {
      return await this.VenderModel.create(venderData);
    } catch (error) {
      throw new Error("Error creating vendor: " + error.message);
    }
  }


  async getAllVendors(){
    try {
      return await this.VenderModel.find();
    } catch (error) {
      throw new Error("Error fetching vendors: " + error.message);
    }
  }

  async findVender(vendorId:string){
    try {
      return await this.VenderModel.findById(vendorId);
    } catch (error) {
      throw new Error("Error fetching vendor: " + error.message);
    }
  }

  async updateVender(vendorId:string, updatedVenderData: Vender){
    try {
      return await this.VenderModel.findByIdAndUpdate(vendorId, updatedVenderData, {new: true});
    } catch (error) {
      throw new Error("Error updating vendor: " + error.message);
    }
  }

  async deleteVender(vendorId:string){
    try {
      return await this.VenderModel.findByIdAndDelete(vendorId);
    } catch (error) {
      throw new Error("Error deleting vendor: " + error.message);
    }
  }

  
  async getVendorPerformance(vendorId) {

    const onTimeDeliveryRate = this.calculateOnTimeDeliveryRate(
      vendorId
    );
    const qualityRatingAvg = this.calculateQualityRatingAvg(
      vendorId
    );
    const averageResponseTime = this.calculateAverageResponseTime(
      vendorId
    );
    const fulfillmentRate = this.calculateFulfillmentRate(
      vendorId
    );

    return {
      onTimeDeliveryRate,
      qualityRatingAvg,
      averageResponseTime,
      fulfillmentRate,
    };
  }


  async calculateOnTimeDeliveryRate(vendorId: number): Promise<number> {
    const completedPurchaseOrders = await this.PurchaseOrderModel.find({
      where: {
        vendor: { id: vendorId },
        status: 'completed',
      },
    });

    const onTimeDeliveries = completedPurchaseOrders.filter(
      (po) => po.deliveryDate <= po.orderDate
    );

    return onTimeDeliveries.length / completedPurchaseOrders.length;
  }

  async calculateQualityRatingAvg(vendorId: number): Promise<number> {
    const completedPurchaseOrders = await this.PurchaseOrderModel.find({
      where: {
        vendor: { id: vendorId },
        status: 'completed',
        qualityRating: { $ne: null },
      },
    });

    const totalQualityRating = completedPurchaseOrders.reduce(
      (sum, po) => sum + po.qualityRating,
      0
    );

    return totalQualityRating / completedPurchaseOrders.length;
  }

  async calculateAverageResponseTime(vendorId: number): Promise<number> {
    const acknowledgedPurchaseOrders = await this.PurchaseOrderModel.find({
      where: {
        vendor: { id: vendorId },
        acknowledgmentDate: { $ne: null },
      },
    });

    const totalResponseTime = acknowledgedPurchaseOrders.reduce(
      (sum, po) => sum + (po.acknowledgmentDate.getTime() - po.issueDate.getTime()),
      0
    );

    return totalResponseTime / acknowledgedPurchaseOrders.length;
  }

  async calculateFulfillmentRate(vendorId: number): Promise<number> {
    const completedPurchaseOrders = await this.PurchaseOrderModel.find({
      where: {
        vendor: { id: vendorId },
        status: 'completed',
      },
    });

    const fulfilledPurchaseOrders = completedPurchaseOrders.filter(
      (po) => po.qualityRating !== null
    );

    return fulfilledPurchaseOrders.length / completedPurchaseOrders.length;
  }

  async updateVendorPerformance(vendorId: number): Promise<void> {
    const onTimeDeliveryRate = await this.calculateOnTimeDeliveryRate(vendorId);
    const qualityRatingAvg = await this.calculateQualityRatingAvg(vendorId);
    const averageResponseTime = await this.calculateAverageResponseTime(vendorId);
    const fulfillmentRate = await this.calculateFulfillmentRate(vendorId);

    await this.HistoricalVendorPerformance.findOneAndUpdate({vendorId}, {
      onTimeDeliveryRate,
      qualityRatingAvg,
      averageResponseTime,
      fulfillmentRate,
    });

    // Optionally, save historical performance data
    await this.HistoricalVendorPerformance.create({
      vendor: { id: vendorId },
      date: new Date(),
      onTimeDeliveryRate,
      qualityRatingAvg,
      averageResponseTime,
      fulfillmentRate,
    });
  }
}