# ---- Build Stage ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# ---- Production Stage ----
FROM node:20-alpine AS runner
WORKDIR /app
RUN yarn global add sirv-cli
COPY --from=builder /app/build ./build
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000
USER node
CMD ["sh", "-c", "sirv build --port $PORT --host $HOST --single"]