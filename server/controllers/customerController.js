import Customer from "../models/Customer.js";

const createCustomer = async (req, res) => {
  console.log(req.body);
  try {
    const customer = await Customer.create(req.body);
    //res.redirect("/login");
    res.status(201).json({ status: "ok", customer });
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

const getAllCustomers = async (req, res) => {
  const customers = await Customer.find({});
  res.status(200).json(customers);
};

const getCustomerById = async (req, res) => {
  console.log(req.params);
  const customer = await Customer.findById({ _id: req.params.customerId });
  res.status(200).json({ customer });
};

const updateCustomer = async (req, res) => {
  let customer = await Customer.findById(req.body._id);
  customer.customerName = req.body.customerName;
  customer.customerAddress = req.body.customerAddress;
  customer.customerPhone = req.body.customerPhone;
  customer.customerEmail = req.body.customerEmail;
  customer.contactPreferenceWhatsapp = req.body.contactPreferenceWhatsapp;
  customer.contactPreferenceSms = req.body.contactPreferenceSms;
  customer.contactPreferenceCall = req.body.contactPreferenceCall;
  customer.save();
  res.status(200).json({ status: "ok", customer });
};

const deleteCustomer = async (req, res) => {
  try {
    console.log(req.params.customerId);
    await Customer.findOneAndDelete({ _id: req.params.customerId });
    res.status(200).json({ status: "ok" });
  } catch (error) {}
};

const getCustomerByName = async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  const customers = await Customer.find({ customerName: { $regex: req.body.searchTerm, $options: "i" } }).limit(10);
  console.log(customers);
  res.status(200).json({ customers });
};
export { createCustomer, getAllCustomers, getCustomerById, getCustomerByName, updateCustomer, deleteCustomer };
