import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";

const Member = async () => {
    const user = await currentUser();
    //console.log(user);
    return (
        <div className="flex flex-col justify-center p-4">
            <h1 className="font-bold text-3xl">
                Welcome, {user?.firstName} {user?.lastName}
            </h1>
            <Balance />
            <IncomeExpense />
            <AddTransaction />
            <TransactionList />
        </div>
    );
};

export default Member;
<div>
    <h1>Member</h1>
</div>;
