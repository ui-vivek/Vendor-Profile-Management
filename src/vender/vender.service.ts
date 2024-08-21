import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Vender } from "src/models/Vender.model";

@Injectable()

export class VenderService {

  constructor(@InjectModel('Vender') private readonly VenderModel: Model<Vender>,){

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

}