import mongoose from "mongoose";

const DeviceDefinitionSchema = new mongoose.Schema({
  deviceType: {
    type: String,
  },
  deviceBrands: [
    {
      deviceBrand: {
        type: String,
      },
      deviceModels: [
        {
          deviceModel: {
            type: String,
          },
        },
      ],
    },
  ],
});
const DeviceDefinition = mongoose.model("DeviceDefinition", DeviceDefinitionSchema);

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

const DeviceModelSchema = new mongoose.Schema(
  {
    deviceBrandId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    deviceModel: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DeviceModel = mongoose.model("DeviceModel", DeviceModelSchema);

export { DeviceDefinition, DeviceType, DeviceBrand, DeviceModel };
