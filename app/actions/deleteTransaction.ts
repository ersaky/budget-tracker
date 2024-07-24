'use server';

import { db } from "../lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { Delete } from "../types";

async function deleteTransaction( transactionId : string):Promise<Delete>{
 const { userId } = auth();
 
 if( !userId ){
  return {
    error: "User not found"
  }
 }
 try{
  const result = await db.transaction.delete({
    where: { userId, id: transactionId}
  })
  revalidatePath("/")
  return { message: "Transaction deleted successfully"}  
 }
 catch(err){
  return{
    error: "Error"
  }
 }
}

export default deleteTransaction;