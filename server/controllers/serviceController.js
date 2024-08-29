import ServiceType from "../models/ServiceType.js";
const newServiceType = async (req, res) => {
  console.log(req.body);
  try {
    const serviceType = await ServiceType.create(req.body);
    res.status(201).json({ succeeded: true, serviceType });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const getAllServiceTypes = async (req, res) => {
  const serviceTypes = await ServiceType.find({});
  res.status(200).json(serviceTypes);
};

const updateServiceType = async (req, res) => {
  try {
    const serviceType = await ServiceType.findById(req.params.id);
    serviceType.serviceType = req.body.serviceType;
    serviceType.save();
    console.log(serviceType);

    res.status(200).json({ succeeded: true, serviceType });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const deleteServiceType = async (req, res) => {
  console.log(req.body);

  try {
    await ServiceType.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ succeeded: true });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
export { newServiceType, getAllServiceTypes, updateServiceType, deleteServiceType };
