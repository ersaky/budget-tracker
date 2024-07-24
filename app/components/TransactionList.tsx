import getTransactionList from "../actions/getTransactionList";
import { Transaction } from "../types";
import TransactionItem from "./TransactionItem";

const TransactionList = async () => {
    const { transactions, error } = await getTransactionList();

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h3 className="font-bold">History</h3>
            <ul>
                {transactions &&
                    transactions.map((transaction: Transaction) => (
                        <TransactionItem
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default TransactionList;
