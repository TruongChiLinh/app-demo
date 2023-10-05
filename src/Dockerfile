FROM node :16
WORKDIR /app
COPY . .
RUN npm install
RUN npm build
EXPOSE 3000
CMD ["npm" ,"start"]