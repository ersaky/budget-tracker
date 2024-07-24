'use server';

import { db } from "../lib/db";
import { auth } from "@clerk/nextjs/server";
import { TransactionList } from "../types";

async function getTransactionList(): Promise<TransactionList> {
    const { userId } = auth();

    if (!userId) {
        return {
            error: "User not found",
        };
    }
    try {
        const result = await db.transaction.findMany({
            where: { userId },
            orderBy: {
                created_at: "desc",
            },
        });

        return { transactions : result };
    } catch (err) {
        return {
            error: "Error",
        };
    }
}

export default getTransactionList;
