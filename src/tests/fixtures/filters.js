import moment from "moment";

const filters = {
  text: "",
  sortBy: "date",
  startdate: undefined,
  endDate: undefined,
};

const altFilters = {
  text: "bill",
  sortBy: "amount",
  startdate: moment(0),
  endDate: moment(0).add(3, "days"),
};

export { filters, altFilters };
