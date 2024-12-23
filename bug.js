```javascript
// pages/api/data.js
export default async function handler(req, res) {
  // Some asynchronous operation that might throw an error
  try {
    const data = await someAsyncOperation();
    res.status(200).json(data);
  } catch (error) {
    // This will not be caught by Next.js's error handling
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function someAsyncOperation() {
  // Simulate an error
  throw new Error('Something went wrong');
}
```