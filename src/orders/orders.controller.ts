import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('/purchase-orders')
export class OrdersController {
  constructor(private readonly _ordersService: OrdersService) {}

  @Post() 
  async createPurchaseOrder(@Body() purchaseOrderData: any) {
    return this._ordersService.createPurchaseOrder(purchaseOrderData);
  }

  @Get()
  async getAllPurchaseOrders(@Query('vendorId') vendorId?: string, @Query('status') status?: string,) {
    return this._ordersService.getAllPurchaseOrders(vendorId, status);
  }

  @Get(':poId')
  async getPurchaseOrderById(@Param('poId') poId: string){
    console.log(poId)
    return this._ordersService.getPurchaseOrderById(poId);
  }

  @Put(':poId')
  async updatePurchaseOrder(@Param('poId') poId: string,@Body() updatePurchaseOrderDto: any) {
    return this._ordersService.updatePurchaseOrder(poId, updatePurchaseOrderDto);
  }

  @Delete(':poId')
  async deletePurchaseOrder(@Param('poId') poId: string): Promise<void> {
    return await this._ordersService.deletePurchaseOrder(poId);
  }

  @Post('acknowledge/:poId')
  async acknowledgePurchaseOrder(@Param('poId') poId: string) {
  return await this._ordersService.updatePurchaseOrder(poId,{acknowledgmentDate : new Date()});
}
}
