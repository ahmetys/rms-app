import { Ticket } from "../models/Ticket.js";

const getAllTickets = async (req, res) => {
  const tickets = await Ticket.find({});
  res.status(200).json(tickets);
};

const newTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json({ succeeded: true, ticket });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const getTicketById = async (req, res) => {
  console.log(req.params.ticketId);

  const ticket = await Ticket.findById({ _id: req.params.ticketId });
  res.status(200).json({ succeeded: true, ticket });
};
export { newTicket, getAllTickets, getTicketById };
