# Users Dashboard

A simple and clean dashboard to explore users.

## Tech Stack

- Next.js
- TypeScript
- React Query
- Tailwind CSS

## Features

- Users list
- Search
- Pagination
- Loading & Error states

## Why this approach?

I focused on building a simple but production-like solution instead of over-engineering.

- Used React Query to handle server state (caching, loading, error handling)
- Chose feature-based architecture for scalability
- Implemented debounced search to reduce unnecessary API calls
- Kept UI clean and minimal to focus on UX

## What could be improved?

Given more time, I would:

- Add user details modal
- Improve pagination UX (infinite scroll or better controls)
- Add unit/integration tests
- Introduce design system for consistency

## Run locally

```bash
npm install
npm run dev
```

## Screenshot

(Add screenshot here)
![alt text](image.png)