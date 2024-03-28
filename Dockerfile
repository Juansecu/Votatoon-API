FROM node:18.20-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN chown -R node /usr/src/app
USER node
RUN pnpm install --silent --frozen-lockfile
RUN pnpm run build

FROM node:18.20-alpine AS production
ENV NODE_ENV=production
ENV PORT=3000
WORKDIR /usr/src/app
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN chown -R node /usr/src/app
USER node
RUN pnpm install -P --silent --frozen-lockfile
COPY --from=build /usr/src/app/dist ./dist
COPY ["ormconfig.js", "./"]
EXPOSE $PORT
CMD ["pnpm", "run", "start:prod"]
