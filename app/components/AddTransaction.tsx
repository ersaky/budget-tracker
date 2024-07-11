"use client";
import { useRef } from "react";
import addTransaction from "../actions/AddTransaction";

const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData) => {
        const { data, error } = await addTransaction(formData);
        if (error) {
            alert(error);
        } else {
            alert("Success!");
            formRef.current?.reset();
        }
    };
    return (
        <div className="mt-4">
            <h3 className="text-lg font-bold">Add Transaction</h3>
            <form
                ref={formRef}
                action={clientAction}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="text">
                        Text
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="text"
                        type="text"
                        name="text"
                        placeholder="Text"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="amount"
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        step="0.01"
                    />
                    <p className="text-xs italic">
                        negative expense, positive income
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Transaction
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;
