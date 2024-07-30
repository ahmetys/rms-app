import { DeviceType } from "../models/Definitions.js";
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
export { newDeviceType, getAllDeviceTypes, updateDeviceType, deleteDeviceType };
