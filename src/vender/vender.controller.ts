import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { VenderService } from "./vender.service";
import { VendorDto } from "./dto/vender.dto";

@Controller('/vendors')
export class venderController{

    constructor(private _venderService:VenderService){
    }

  // POST /vendors: Create a new vendor.
  @Post()
  async createVendor(@Body() venderData:VendorDto) {
    return this._venderService.createVender(venderData)
  }

  // GET /vendors: List all vendors.
  @Get()
  async getAllVendors() {
    return this._venderService.getAllVendors()
  }

  // GET /vendors/:vendorId: Retrieve a specific vendor's details.
  @Get(':vendorId')
  async getVendorById(@Param('vendorId') vendorId: string) {
    return this._venderService.findVender(vendorId);
  }

  // PUT /vendors/:vendorId: Update a vendor's details.
  @Put(':vendorId')
  async updateVendorById(@Param('vendorId') vendorId: string,@Body() vendorData:any) {
    return this._venderService.updateVender(vendorId, vendorData);
  }

  // DELETE /vendors/:vendorId: Delete a vendor.
  @Delete(':vendorId')
  async deleteVendorById(@Param('vendorId') vendorId: string) {
    // Implement vendor deletion logic here.
    return this._venderService.deleteVender(vendorId)
  }

  @Get('/performance/:vendorId')
  async vendorPerformance(@Param('vendorId') vendorId: string){
    return this._venderService.getVendorPerformance(vendorId);
  }
}