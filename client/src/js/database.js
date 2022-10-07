import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () => {
  // creates a new database named 'contct_db'
  openDB('contact_db', 1, {
    // Adds databse to schema if not already
    upgrade(db) {
      if (db.objectStoreNames.contains('contacts')) {
        console.log('contacts store already exists');
        return;
      }
      // creates a new object sotre for the data, gives it key name 'id' which increments automatically
      db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
      console.log('contacts store created');
    }
  });
};

// exports a GET function
export const getDb = async () => {
  console.log('GET from the database');

  // creates a connection to the database
  const contactDb = await openDB('contact_db', 1);

  // creates a new transaction 
  const tx = contactDb.transaction('contacts', 'readonly');

  // opens the desired object store 
  const store = tx.objectStore('contacts');

  // get all data in database
  const request = store.getAll();

  // get confirmation 
  const result = await request;
  console.log('result.value', result);
  return result;
};

// exports a POST function 
export const postDb = async (name, email, phone, profile) => {
  console.log('POST to the database');

  const contactDb = await openDB('contact_db', 1);

  const tx = contactDb.transaction('contacts', 'readwrite');

  const store = tx.objectStore('contacts');

  // uses .add() to store and pass content 
  const request = store.add({ name: name, email: email, phone: phone, profile: profile});

  const result = await request;
  console.log('data saved to the database', result);
}

// export a DELETE function 
export const deleteDB = async (id) => {
  console.log('DELETE from the database', id);

  const contactDb = await openDB('contact_db', 1);

  const tx = contactDb.transaction('contacts', 'readwrite');

  const store = tx.objectStore('contacts');

  // uses the .delete() method 
  const request = store.delete(id);

  const result = await request;
  console.log('result.value', result);
  return result?.value;
}