# repro-nextjs-link-get-routes-prefetch

This repo demonstrates strange and otherworldly behavior with Next.js `<Link>` and prefetching API routes.

----

In development mode with `pnpm dev`, the separate links work as expected:

https://github.com/user-attachments/assets/39e7543e-8931-4de1-9970-4f40e8bb89de

In production mode with `pnpm build && pnpm start`, the API route appears to be prefetched, and all of the links send the browser to **the same URL with the same query parameters:**

https://github.com/user-attachments/assets/0b6694a7-ed20-4798-83e6-0c67b2e49cc8

Furthermore, hovering over the link in production **shows the correct URL even though that's not going to be the one that the browser goes to**:

![Image](https://github.com/user-attachments/assets/8e9f4fc9-86ab-42db-8992-020da7a74e34)

This is bewildering, confusing, and is different from the way hypertext links are supposed to work.

Yes, I guess this is somewhat documented by https://nextjs.org/docs/app/api-reference/components/link#prefetch but it's not clear that adding `prefetch={false}` is the solution.
