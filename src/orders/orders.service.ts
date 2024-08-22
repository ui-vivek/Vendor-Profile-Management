import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PurchaseOrder } from "src/models/Orders.model";
import * as mongoose from 'mongoose';
import { HistoricalVendorPerformance } from "src/models/Performance.model";

@Injectable()
export class OrdersService {
    constructor(@InjectModel('PurchaseOrder') private readonly PurchaseOrderModel: Model<PurchaseOrder>,@InjectModel('HistoricalVendorPerformance') private readonly HistoricalVendorPerformance: Model<HistoricalVendorPerformance>,){}


  async createPurchaseOrder(purchaseOrderData: PurchaseOrder): Promise<PurchaseOrder> {
    return this.PurchaseOrderModel.create(purchaseOrderData);
  }


  async getAllPurchaseOrders(vendorId?: string, status?: string){
    try {
      const query: any = {};
      if (vendorId && mongoose.Types.ObjectId.isValid(vendorId)) {
        query.vendor = new mongoose.Types.ObjectId(vendorId);
      }

      if (status) {
        query.status = status;
      }

      return await this.PurchaseOrderModel.find(query);
    } catch (error) {
      throw new Error("Error fetching purchase orders: " + error.message);
    }
  }

  async getPurchaseOrderById(poId: string): Promise<PurchaseOrder | null> {
    return this.PurchaseOrderModel.findOne({ poNumber: poId });
  }

  async updatePurchaseOrder(
    poId: string,
    updatePurchaseOrderDto: any
  ): Promise<PurchaseOrder | null> {
    const purchaseOrder = await this.PurchaseOrderModel.findOne({ poNumber: poId });

    if (!purchaseOrder) {
      return null; 
    }

    purchaseOrder.status = updatePurchaseOrderDto.status;

    if(updatePurchaseOrderDto.acknowledgmentDate)
        purchaseOrder.acknowledgmentDate = updatePurchaseOrderDto.acknowledgmentDate;
    return this.PurchaseOrderModel.findByIdAndUpdate(purchaseOrder._id, purchaseOrder, { new: true });
  }

  async deletePurchaseOrder(poId: string): Promise<void> {
    await this.PurchaseOrderModel.findOneAndDelete({ poNumber: poId });
  }


}