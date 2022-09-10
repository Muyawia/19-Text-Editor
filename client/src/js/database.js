import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
       
export const putDb = async (content) => {                
  const jateDb = await openDB('jate', 1);            
       
  const tan = jateDb.transaction('jate', 'readwrite');          
                            
  const temp = tan.objectStore('jate');            
                                     
  const request = temp.put({ value: content, id: 20, });           
  console.log(`Your request is... ${request}`)           
                                                           
  const result = await request;
  console.log(`${result}... stored to database!`);                                    
}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);                  
                    
  const tan = jateDb.transaction('jate', 'readonly');                 
                     
  const store = tan.objectStore('jate');             
                    
  const request = store.get(1);                
                    
  const result = await request;                
  console.log(`${result} is the latest value`);                  
  return result.value;                        
}

initdb();
