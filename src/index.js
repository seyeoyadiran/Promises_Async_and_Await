// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";


async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  
  if( id < 1 || id > 10 || typeof id !== 'number'){
    throw new Error('Invalid ID: ID Number must be between 1 and 10');
  }

  try{
    const databaseName = await central(id);
    const returnedValue = await db1(id);
    const returnedValue1 = await vault(id);

    const [userDbResult, vaultResult] = await Promise.all([
        dbs[databaseName](id),
        vault(id),
    ])
    
    console.log(databaseName);
    console.log('id:' + id)
    console.log(returnedValue)
    console.log(returnedValue1)
  }
   catch (error) {
    throw  Error(  `Error reading Database ${error}`)

   }
   }


getUserData(3)
getUserData(133);
getUserData(aisdfa);