'use server';

import { db } from "../lib/db";
import { auth } from "@clerk/nextjs/server";

interface TransactionResult{
  balance?: number;
  error?: string;
}

async function getUserBalance():Promise<TransactionResult>{
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
  const balance = result.reduce( (sum, transaction) => sum + transaction.amount, 0 );
  return { balance };
 }
 catch(err){
  return{
    error: "Error"
  }
 }
}

export default getUserBalance;