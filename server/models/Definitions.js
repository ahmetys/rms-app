import mongoose from "mongoose";

const DeviceTypeSchema = new mongoose.Schema(
  {
    deviceType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DeviceType = mongoose.model("DeviceType", DeviceTypeSchema);

const DeviceBrandSchema = new mongoose.Schema(
  {
    deviceTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    deviceType: {
      type: String,
      required: true,
    },
    deviceBrand: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DeviceBrand = mongoose.model("DeviceBrand", DeviceBrandSchema);

export { DeviceType, DeviceBrand };
