```javascript
// pages/api/data.js
export default async function handler(req, res) {
  try {
    const data = await someAsyncOperation();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message }); // Include detailed error message
  }
}

async function someAsyncOperation() {
  // Simulate an error
  try{
    //Some code that might throw an error
    const result = await someOtherAsyncOperation()
    return result
  }catch(error){
    throw new Error(`someAsyncOperation failed with: ${error.message}`);
  }
}

async function someOtherAsyncOperation(){
  throw new Error('Something went wrong in someOtherAsyncOperation');
}
```