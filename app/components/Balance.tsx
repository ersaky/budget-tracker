import getUserBalance from "../actions/getUserBalance";

const Balance = async () => {
    const { balance } = await getUserBalance();

    return (
        <div className="mt-4">
            <h2 className="font-bold">Your Balance</h2>
            <h3 className="text-blue-600 text-3xl">{balance} TL</h3>
        </div>
    );
};

export default Balance;
