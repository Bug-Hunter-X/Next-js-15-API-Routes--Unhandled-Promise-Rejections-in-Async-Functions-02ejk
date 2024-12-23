# Next.js 15 API Routes Unhandled Promise Rejection Bug

This repository demonstrates a subtle bug in Next.js 15 API routes where unhandled promise rejections within `async` functions don't trigger Next.js's error handling mechanism. This can result in silent failures and make debugging more challenging.

## Bug Description

The issue arises when an error occurs inside an `async` function within an API route.  Next.js's default error handling might not catch these errors if they're not explicitly handled within the `try...catch` block of the main route handler.  This leads to a 500 error with no useful debugging information.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Access the API route:  `/api/data`
5. Observe the console for the error message and the 500 response, lacking detailed error information.

## Solution

The solution involves ensuring proper error handling within the `async` function itself, so that it can be caught by the top-level `try...catch` block in the API route handler.
