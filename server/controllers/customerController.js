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
export { createCustomer, getAllCustomers };
