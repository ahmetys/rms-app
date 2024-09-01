import Customer from "../models/Customer.js";
import { Ticket } from "../models/Ticket.js";

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json({ succeeded: true, customer });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const getAllCustomers = async (req, res) => {
  const customers = await Customer.find({});
  res.status(200).json(customers);
};

const getCustomerById = async (req, res) => {
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
  res.status(200).json({ succeeded: true, customer });
};

const deleteCustomer = async (req, res) => {
  try {
    await Customer.findOneAndDelete({ _id: req.params.customerId });
    res.status(200).json({ succeeded: true });
  } catch (error) {}
};

const getCustomerByName = async (req, res) => {
  const customers = await Customer.find({ customerName: { $regex: req.body.searchTerm, $options: "i" } }).limit(10);
  res.status(200).json({ customers });
};

const getCustomerDetails = async (req, res) => {
  const customerInfos = await Customer.findById(req.body.customerId);
  const customerTickets = await Ticket.find({
    "customerInfos._id": req.body.customerId,
  });
  res.status(200).json({ succeded: true, customerDetails: { customerInfos, customerTickets } });
};
export { createCustomer, getAllCustomers, getCustomerById, getCustomerByName, updateCustomer, deleteCustomer, getCustomerDetails };
