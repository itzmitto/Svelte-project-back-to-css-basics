# ---- Build Stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package.json and yarn.lock first to leverage layer caching
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of your code and build the app
COPY . .
RUN yarn build

# Prune devDependencies to keep the image light
RUN yarn install --production --ignore-scripts --prefer-offline

# ---- Production Stage ----
FROM node:20-alpine AS runner
WORKDIR /app

# Copy built code and required node modules from builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

USER node

CMD ["node", "build"]