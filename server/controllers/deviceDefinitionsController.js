import { DeviceDefinition, DeviceBrand, DeviceType, DeviceModel } from "../models/DeviceDefinitions.js";

const getAllDeviceDefinitions = async (req, res) => {
  const deviceDefinitions = await DeviceDefinition.find({});
  res.status(200).json(deviceDefinitions);
};

const newDeviceType = async (req, res) => {
  try {
    const deviceType = await DeviceDefinition.create(req.body);
    res.status(201).json({ succeeded: true, deviceType });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const updateDeviceType = async (req, res) => {
  try {
    const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.body.deviceTypeId }, { deviceType: req.body.deviceType }, { new: true });
    res.status(200).json({ succeeded: true, deviceType });
  } catch (error) {}
};

const deleteDeviceType = async (req, res) => {
  try {
    await DeviceDefinition.findOneAndDelete({ _id: req.params.deviceTypeId });
    res.status(200).json({ succeeded: true });
  } catch (error) {}
};

const newDeviceBrand = async (req, res) => {
  try {
    const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.body.deviceTypeId }, { $push: { deviceBrands: { deviceBrand: req.body.deviceBrand } } }, { new: true });
    res.status(201).json({ succeeded: true, deviceType });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const updateDeviceBrand = async (req, res) => {
  try {
    const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.body.deviceTypeId }, { "deviceBrands.$[outer]": { deviceBrand: req.body.deviceBrand } }, { arrayFilters: [{ "outer._id": req.body.deviceBrandId }], new: true });
    res.status(200).json({ succeeded: true, deviceType });
  } catch (error) {
    console.log(error);
  }
};

const deleteDeviceBrand = async (req, res) => {
  try {
    const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.params.deviceTypeId }, { $pull: { deviceBrands: { _id: req.params.deviceBrandId } } }, { new: true });
    res.status(200).json({ succeeded: true });
  } catch (error) {}
};

const newDeviceModel = async (req, res) => {
  try {
    const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.body.deviceTypeId }, { $push: { "deviceBrands.$[outer].deviceModels": { deviceModel: req.body.deviceModel } } }, { arrayFilters: [{ "outer._id": req.body.deviceBrandId }], new: true });
    res.status(201).json({ succeeded: true, deviceType });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const getDeviceBrandsByDeviceType = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const deviceBrands = await DeviceBrand.find({ deviceTypeId: req.params.deviceTypeId });
  res.status(200).json({ succeeded: true, deviceBrands });
};

const updateDeviceModel = async (req, res) => {
  try {
    const deviceModel = await DeviceDefinition.findOneAndUpdate(
      { "deviceBrands.deviceModels._id": req.params.deviceModelId },
      {
        $set: {
          "deviceBrands.$[].deviceModels.$[xxx].deviceModel": req.body.deviceModel,
        },
      },
      { arrayFilters: [{ "xxx._id": req.params.deviceModelId }], new: true }
    );
    res.status(200).json({ succeeded: true, deviceModel });
  } catch (error) {}
};

const deleteDeviceModel = async (req, res) => {
  const deviceType = await DeviceDefinition.findOneAndUpdate(
    {
      deviceBrands: {
        $elemMatch: {
          _id: req.params.deviceBrandId,
          "deviceModels._id": req.params.deviceModelId,
        },
      },
    },
    { $pull: { "deviceBrands.$.deviceModels": { _id: req.params.deviceModelId } } }
  );
  res.status(200).json({ succeeded: true, deviceType });
};

const getDeviceModelsByDeviceBrand = async (req, res) => {
  const deviceModels = await DeviceModel.find({ deviceBrandId: req.params.deviceBrandId });
  res.status(200).json({ succeeded: true, deviceModels });
};

export { newDeviceType, getAllDeviceDefinitions, updateDeviceType, deleteDeviceType, newDeviceBrand, updateDeviceBrand, deleteDeviceBrand, getDeviceBrandsByDeviceType, newDeviceModel, updateDeviceModel, deleteDeviceModel, getDeviceModelsByDeviceBrand };
