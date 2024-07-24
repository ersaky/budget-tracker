'use server';

import { db } from "../lib/db";
import { auth } from "@clerk/nextjs/server";
import { IncomeExpense } from "../types";

async function getIncomeExpense():Promise<IncomeExpense>{
 const { userId } = auth();
 
 if( !userId ){
  return {
    error: "User not found"
  }
 }
 try{
  const result = await db.transaction.findMany({
    where: { userId}
  })
  const amounts = result.map( transaction => transaction.amount);

  const income = amounts.filter( amount => amount > 0 ).reduce((acc, amount) =>  acc + amount, 0);
  const expense = amounts.filter( amount => amount < 0 ).reduce((acc, amount) =>  acc + amount, 0);

  return { income, expense: Math.abs(expense) };
}
 catch(err){
  return{
    error: "Error"
  }
 }
}

export default getIncomeExpense;