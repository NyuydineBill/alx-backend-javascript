// main.ts

/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud';

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)`);
console.log(`// Insert row ${JSON.stringify(row)}`);
console.log(`const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };`);
console.log(` Called " String and Age`);
  in Was ? die Now

