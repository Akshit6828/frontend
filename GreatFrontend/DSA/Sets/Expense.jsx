import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // Correct routing
import { connect } from "react-redux"; // Assuming Redux is used
import { fetchExpenses, addExpense, updateExpense } from "../actions/expenseActions"; // Import relevant actions
import EditForm from "./EditForm";

class Expenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            expenses: [],
            showCreateModal: false,
            editData: null,
        };
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this.setState({ username: user.username });
            this.props.fetchExpenses(); // Fetch existing expenses
        } else {
            this.props.history.push("/login");
        }
    }

    handleShow = (mode, data = null) => {
        this.setState({ showCreateModal: true, editData: mode === "edit" ? data : null });
    };

    handleClose = () => {
        this.setState({ showCreateModal: false, editData: null });
    };

    handleRowSelect = (row) => {
        this.handleShow("edit", row);
    };

    submitData = (expenseData) => {
        if (this.state.editData) {
            this.props.updateExpense(this.state.editData._id, expenseData); // Update existing expense
        } else {
            this.props.addExpense(expenseData); // Create new expense
        }
        this.handleClose();
    };

    render() {
        return (
            <div>
                <h2>Expense Management</h2>
                <button onClick={() => this.handleShow("create")}>Create Expense</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.expenses.map((expense) => (
                            <tr key={expense._id}>
                                <td>{expense.name}</td>
                                <td>{expense.amount}</td>
                                <td>
                                    <button onClick={() => this.handleRowSelect(expense)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.state.showCreateModal && (
                    <EditForm
                        data={this.state.editData}
                        onSubmit={this.submitData}
                        onClose={this.handleClose}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    expenses: state.expenses, // Assuming Redux state
});

export default withRouter(connect(mapStateToProps, { fetchExpenses, addExpense, updateExpense })(Expenses));
