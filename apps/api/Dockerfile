# ---- Stage 1 Build------------
FROM node:22-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY tsup.config.ts tsconfig.json ./
COPY src ./src
RUN pnpm build

RUN pnpm install --frozen-lockfile --prod
# ------ Stage 2  ----------------
FROM node:22-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD ["node", "dist/index.js"]