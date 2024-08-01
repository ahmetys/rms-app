import { DeviceBrand, DeviceType, DeviceModel } from "../models/Definitions.js";
const newDeviceType = async (req, res) => {
  console.log("new");
  console.log(req.body);
  try {
    const deviceType = await DeviceType.create(req.body);
    res.status(201).json({ succeeded: true, deviceType });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
const getAllDeviceTypes = async (req, res) => {
  const deviceTypes = await DeviceType.find({});
  res.status(200).json(deviceTypes);
};

const updateDeviceType = async (req, res) => {
  try {
    console.log("update req");
    console.log(req.body);
    const deviceType = await DeviceType.findById(req.params.deviceTypeId);
    console.log(deviceType);
    deviceType.deviceType = req.body.deviceType;
    deviceType.save();
    console.log("updated");
    console.log(deviceType);
    res.status(200).json({ succeeded: true, deviceType });
  } catch (error) {
    console.log(error);
  }
};

const deleteDeviceType = async (req, res) => {
  try {
    await DeviceType.findOneAndDelete({ _id: req.params.deviceTypeId });
    res.status(200).json({ succeeded: true });
  } catch (error) {}
};

const newDeviceBrand = async (req, res) => {
  console.log("new");
  console.log(req.body);
  try {
    const deviceBrand = await DeviceBrand.create(req.body);
    res.status(201).json({ succeeded: true, deviceBrand });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const getAllDeviceBrands = async (req, res) => {
  const deviceBrands = await DeviceBrand.find({});
  res.status(200).json(deviceBrands);
};

const updateDeviceBrand = async (req, res) => {
  try {
    console.log("update req");
    console.log(req.body);
    const deviceBrand = await DeviceBrand.findById(req.params.deviceBrandId);
    console.log(deviceBrand);
    deviceBrand.deviceBrand = req.body.deviceBrand;
    deviceBrand.save();
    console.log("updated");
    console.log(deviceBrand);
    res.status(200).json({ succeeded: true, deviceBrand });
  } catch (error) {
    console.log(error);
  }
};

const deleteDeviceBrand = async (req, res) => {
  try {
    await DeviceBrand.findOneAndDelete({ _id: req.params.deviceBrandId });
    res.status(200).json({ succeeded: true });
  } catch (error) {}
};

const getDeviceBrandsByDeviceType = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const deviceBrands = await DeviceBrand.find({ deviceTypeId: req.params.deviceTypeId });
  res.status(200).json({ succeeded: true, deviceBrands });
};

const newDeviceModel = async (req, res) => {
  console.log("new");
  console.log(req.body);
  try {
    const deviceModel = await DeviceModel.create(req.body);
    res.status(201).json({ succeeded: true, deviceModel });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

export { newDeviceType, getAllDeviceTypes, updateDeviceType, deleteDeviceType, newDeviceBrand, getAllDeviceBrands, updateDeviceBrand, deleteDeviceBrand, getDeviceBrandsByDeviceType, newDeviceModel };
