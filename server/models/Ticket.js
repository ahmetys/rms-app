import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    customerInfos: {
      customerName: {
        type: String,
      },
      customerADdress: {
        type: String,
      },
      customerPhone: {
        type: String,
      },
      customerEmail: {
        type: String,
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
    deviceInfos: {
      deviceType: {
        type: String,
      },
      deviceBrand: {
        type: String,
      },
      deviceModel: {
        type: String,
      },
      deviceSerial: {
        type: String,
      },
      deviceImei: {
        type: String,
      },
    },
    serviceInfos: {
      serviceTypes: [
        {
          serviceType: {
            type: String,
          },
          estimatedCost: {
            type: Number,
          },
        },
      ],
      serviceNotes: {
        type: String,
      },
      estimatedDeliveryDate: {
        type: String,
      },
      estimatedDeliveryTime: {
        type: String,
      },
      serviceStatus: {
        type: String,
        default: "Serviste",
      },
    },
  },
  {
    timestamps: true,
  }
);
const Ticket = mongoose.model("Ticket", TicketSchema);

export { Ticket };
