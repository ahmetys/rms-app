import ServiceType from "../models/ServiceType.js";
const newServiceType = async (req, res) => {
  console.log(req.body);
  try {
    const serviceType = await ServiceType.create(req.body);
    //res.redirect("/login");
    res.status(201).json({ status: "ok", serviceType });
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      res.status(500).json({
        succeded: false,
        error: { message: "Bu kullanici veya e mail kayitli" },
      });
    }
  }
};

const getServiceList = async (req, res) => {
  const serviceList = await ServiceType.find({});
  console.log(serviceList);
  res.status(200).json(serviceList);
};

const updateServiceType = async (req, res) => {
  try {
    const serviceType = await ServiceType.findById(req.params.id);
    console.log(serviceType);
    console.log(req.body);
    serviceType.serviceType = req.body.serviceType;
    serviceType.save();
    console.log(serviceType);
    res.status(200).json({ status: "ok", serviceType });
  } catch (error) {}
};

const deleteServiceType = async (req, res) => {
  try {
    await ServiceType.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ status: "ok" });
  } catch (error) {}
};
export { newServiceType, getServiceList, updateServiceType, deleteServiceType };
