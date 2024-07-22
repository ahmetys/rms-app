import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: false,
    },
    customerAddress: {
      type: String,
      required: false,
    },
    customerPhone: {
      type: String,
      required: false,
    },
    customerEmail: {
      type: String,
      required: false,
    },
    contactPreferenceWhatsapp: {
      type: Boolean,
    },
    contactPreferenceSms: {
      type: Boolean,
    },
    contactPreferenceCall: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
