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
  } catch (error) {
    console.log(error);
  }
};

const deleteDeviceType = async (req, res) => {
  try {
    await DeviceDefinition.findOneAndDelete({ _id: req.params.deviceTypeId });
    res.status(200).json({ succeeded: true });
  } catch (error) {}
};

const newDeviceBrand = async (req, res) => {
  console.log("new brand");
  console.log(req.body);
  try {
    //console.log(req.body.deviceTypeId);

    const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.body.deviceTypeId }, { $push: { deviceBrands: { deviceBrand: req.body.deviceBrand } } }, { new: true });
    //const deviceDefiniton = await DeviceDefinition.findById(req.body.deviceTypeId);
    //deviceDefiniton.deviceBrands.push({ deviceBrand: req.body.deviceBrand });
    //deviceDefiniton.save();
    console.log(deviceType);

    //const deviceBrand = await DeviceBrand.create(req.body);
    res.status(201).json({ succeeded: true, deviceType });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const updateDeviceBrand = async (req, res) => {
  try {
    console.log(req.body);

    console.log("update req");
    // const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.body.deviceTypeId, "deviceBrands._id": req.body.deviceBrandId }, { deviceBrand: req.body.deviceBrand }, { new: true });
    const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.body.deviceTypeId }, { "deviceBrands.$[outer]": { deviceBrand: req.body.deviceBrand } }, { arrayFilters: [{ "outer._id": req.body.deviceBrandId }], new: true });

    console.log(deviceType);
    // const deviceBrand = await DeviceBrand.findById(req.params.deviceBrandId);
    // console.log(deviceBrand);
    // deviceBrand.deviceBrand = req.body.deviceBrand;
    // deviceBrand.save();
    // console.log("updated");
    // console.log(deviceBrand);
    res.status(200).json({ succeeded: true, deviceType });
  } catch (error) {
    console.log(error);
  }
};

const deleteDeviceBrand = async (req, res) => {
  try {
    console.log(req.params.deviceTypeId);
    console.log(req.params.deviceBrandId);

    const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.params.deviceTypeId }, { $pull: { deviceBrands: { _id: req.params.deviceBrandId } } }, { new: true });

    //await DeviceBrand.findOneAndDelete({ _id: req.params.deviceBrandId });
    res.status(200).json({ succeeded: true });
  } catch (error) {}
};

const newDeviceModel = async (req, res) => {
  console.log("new model");
  console.log(req.body);
  try {
    //console.log(req.body.deviceTypeId);

    const deviceType = await DeviceDefinition.findOneAndUpdate({ _id: req.body.deviceTypeId }, { $push: { "deviceBrands.$[outer].deviceModels": { deviceModel: req.body.deviceModel } } }, { arrayFilters: [{ "outer._id": req.body.deviceBrandId }], new: true });
    // const deviceType = await DeviceDefinition.find({ _id: req.body.deviceTypeId, "deviceBrands.deviceBrand._id": req.body.deviceBrandId });
    //const deviceDefiniton = await DeviceDefinition.findById(req.body.deviceTypeId);
    //deviceDefiniton.deviceBrands.push({ deviceBrand: req.body.deviceBrand });
    //deviceDefiniton.save();
    console.log(deviceType);

    //const deviceBrand = await DeviceBrand.create(req.body);
    res.status(201).json({ succeeded: true, deviceType });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

////////////////////////////////////////////////////////////

// const getAllDeviceBrands = async (req, res) => {
//   const deviceBrands = await DeviceBrand.find({});
//   res.status(200).json(deviceBrands);
// };

const getDeviceBrandsByDeviceType = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const deviceBrands = await DeviceBrand.find({ deviceTypeId: req.params.deviceTypeId });
  res.status(200).json({ succeeded: true, deviceBrands });
};

// const newDeviceModel = async (req, res) => {
//   console.log("new");
//   console.log(req.body);
//   try {
//     const deviceModel = await DeviceModel.create(req.body);
//     res.status(201).json({ succeeded: true, deviceModel });
//   } catch (error) {
//     res.status(500).json({
//       succeded: false,
//       error,
//     });
//   }
// };

const updateDeviceModel = async (req, res) => {
  try {
    console.log("update req");
    console.log(req.body);
    const deviceModel = await DeviceModel.findById(req.params.deviceModelId);
    console.log(deviceModel);
    deviceModel.deviceModel = req.body.deviceModel;
    deviceModel.save();
    console.log("updated");
    console.log(deviceModel);
    res.status(200).json({ succeeded: true, deviceModel });
  } catch (error) {
    console.log(error);
  }
};

const deleteDeviceModel = async (req, res) => {
  try {
    // await DeviceModel.findOneAndDelete({ _id: req.params.deviceModelId });
    const deviceModel = await DeviceDefinition.find({ "deviceBrands.deviceModels._id": req.params.deviceModelId });

    deviceModel = deviceModel.map((type) => {
      type.deviceBrands.map((brand) => {
        console.log(brand.deviceModels);
        brand.deviceModels.filter((model) => {
          console.log(model);
          return model._id !== req.params.deviceModelId;
        });
        console.log(brand.deviceModels);
      });
    });
    deviceModel.save();

    res.status(200).json({ succeeded: true, deviceModel });
  } catch (error) {}
};

const getDeviceModelsByDeviceBrand = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const deviceModels = await DeviceModel.find({ deviceBrandId: req.params.deviceBrandId });
  res.status(200).json({ succeeded: true, deviceModels });
};

export { newDeviceType, getAllDeviceDefinitions, updateDeviceType, deleteDeviceType, newDeviceBrand, updateDeviceBrand, deleteDeviceBrand, getDeviceBrandsByDeviceType, newDeviceModel, updateDeviceModel, deleteDeviceModel, getDeviceModelsByDeviceBrand };
