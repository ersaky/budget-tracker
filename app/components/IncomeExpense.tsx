import getIncomeExpense from "../actions/getIncomeExpense";

const IncomeExpense = async () => {
    const { income, expense } = await getIncomeExpense();
    return (
        <div className="flex flex-row gap-4">
            <div>
                <h4 className="font-bold text-green-600">Income</h4>
                <p>{income} TL</p>
            </div>
            <div>
                <h4 className="font-bold text-red-600">Expense</h4>
                <p>{expense} TL</p>
            </div>
        </div>
    );
};

export default IncomeExpense;
