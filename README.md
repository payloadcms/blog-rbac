# Blog - Build Your Own Role-Based Access Control in Payload

Code repository for [Blog Post](https://payloadcms.com/blog/build-your-own-rbac)

## Prerequisites:
- MongoDB
- Node

## Steps to run this project:
- git clone git@github.com:payloadcms/blog-rbac.git
- `cp .env.example .env`
- edit `.env` file to have a valid `MONGODB_URI` and `PAYLOAD_SECRET`
- `yarn` or `npm install` to install dependencies
- `yarn dev` or `npm run dev` to run the dev server
- after startup open web browser to <a href="http://localhost:3000/admin">localhost:3000/admin</a>
