# Table of contents:
1. [About](about)
2. [Technical](technical)
3. [Screenshots](screenshots)

# About

Store Docker is an e-commerce solution for businesses interested in starting to sell online.
It is a full featured application, with everyting a modern online store should have, including:

- Intuitive & powerful admin dashboard
- Modern design
- Smooth UX
- Custom, fast checkout
- Cart functionality
- Product search, sort and filter
- Product tracking
- and more...

# Technical

Front end:

- TypeScript
- Next.js (`app/` directory, with the focus on SSR with **server actions**)
- React.js
- Jotai (Redux alternative)
- TailwindCSS

Back end:
- Medusa.js
- PostgreSQL
- Redis
- Docker
- Meilisearch (self-hostable algolia alternative)
- Caddy server (nginx alternative)
- Stripe integration

Because the entire application (front end, back end, databases, and web server) are containerized using Docker, the application is easily hostable on any VPS or Cloud server.

# Screenshots

![store-landing](https://github.com/user-attachments/assets/1e02520f-4368-4d8e-aeaa-d0f8f45118e6)
![store-product-grid](https://github.com/user-attachments/assets/1da8afd2-b0c9-47f8-b7c6-55cc47b1269e)
![store-product-page](https://github.com/user-attachments/assets/7d7cf30c-75ac-40e4-8455-24c2a4730250)
![store-cart](https://github.com/user-attachments/assets/0bce5862-d1ee-4be2-bd33-f7c1e8316d52)
![store-checkout](https://github.com/user-attachments/assets/0991302d-32ae-4536-aa14-73797f9db88e)
![medusa-dashboard](https://github.com/user-attachments/assets/1b0cb880-d0c8-4e2c-bf3d-60e4b739f751)

