import mongoose from "mongoose";

const ServiceTypeSchema = new mongoose.Schema(
  {
    serviceType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ServiceType = mongoose.model("ServiceType", ServiceTypeSchema);

export default ServiceType;
