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

export { DeviceType };
