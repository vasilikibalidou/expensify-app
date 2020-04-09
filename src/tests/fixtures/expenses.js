import moment from "moment";

export default [
  {
    id: 1,
    description: "Gum",
    note: "",
    amount: 0.5,
    createdAt: 0,
  },
  {
    id: 2,
    description: "Rent",
    note: "",
    amount: 500,
    createdAt: moment(0).add(2, "days").valueOf(),
  },
  {
    id: 3,
    description: "Credit card",
    note: "",
    amount: 400,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
