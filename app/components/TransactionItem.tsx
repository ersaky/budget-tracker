"use client";

import { Transaction } from "../types";
import deleteTransaction from "../actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
    const status = transaction.amount > 0 ? "+" : "-";

    const deleteAction = async (transactionId: string) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this transaction?"
        );
        if (!confirmed) {
            return;
        }
        const { message, error } = await deleteTransaction(transactionId);
        if (error) {
            alert(error);
        }
        alert(message);
    };
    return (
        <li className="w-80 p-2 bg-slate-100 mb-1">
            <div className="flex flex-row gap-6 justify-between">
                <p>{transaction.text}</p>
                <p
                    className={
                        status === "+" ? "text-green-700" : "text-red-700"
                    }>
                    {transaction.amount} TL
                </p>
                <button
                    className=""
                    onClick={() => deleteAction(transaction.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TransactionItem;
