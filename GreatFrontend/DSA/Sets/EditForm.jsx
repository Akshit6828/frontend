import React, { useState, useEffect } from "react";

const EditForm = ({ data, onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        amount: "",
    });

    useEffect(() => {
        if (data) {
            setFormData({ name: data.name, amount: data.amount });
        }
    }, [data]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div>
            <h3>{data ? "Edit Expense" : "Create Expense"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
                <button type="submit">{data ? "Update" : "Create"}</button>
                <button onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EditForm;
