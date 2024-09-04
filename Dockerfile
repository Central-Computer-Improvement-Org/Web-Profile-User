FROM node:20-alpine

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

RUN npm run build

RUN mkdir -p /app/.next/static
COPY .next/static /app/.next/static

EXPOSE 3000

CMD ["npm", "start"]
