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