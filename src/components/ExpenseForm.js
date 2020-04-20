import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  state = {
    description: this.props.expense ? this.props.expense.description : "",
    amount: this.props.expense ? this.props.expense.amount.toString() : "",
    note: this.props.expense ? this.props.expense.note : "",
    createdAt: this.props.expense
      ? moment(this.props.expense.createdAt)
      : moment(),
    calendarFocused: false,
    error: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "amount") {
      if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState({
          [e.target.name]: value,
        });
      }
    } else {
      this.setState({
        [e.target.name]: value,
      });
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "Please provide description and amount" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    console.log(this.state)
    return (
        <form className="form" onSubmit={this.handleSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            className="text-input"
            name="description"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="text-input"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            className="textarea"
            name="note"
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.handleChange}
          ></textarea>
          <div>
            <button className="button">Save Expense</button>
          </div>
        </form>
    );
  }
}

export default ExpenseForm;
