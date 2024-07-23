# fomo



## Setup `server` First


![ALT demo ](./demo.png)


```bash
cd server
```

* Install dependencies

```bash
npm i
```

* Create `.env` file 

```bash
touch .env
```

* Put mongodb URL and base_url of crypto api

```bash
MONGO_URI=mongodb://admin:password@localhost:27017/
API_BASE_URL=https://api.coincap.io/v2 # this needs not to change
POLLING_TIME=2000 # in second 10
```

> Note All these key are necessary

* Start dev server

```bash
npm start or node serevr/server.ts
```

## Setup `client` First

* navigate to client

```bash
cd client
```

* Install dependencies

```bash
npm i
```

* Update `src/config.js` file

```bash
export const config = {
  pollingTime: 1000,
  baseURI: "http://localhost:5001"
}
```

* start server

```bash
npm start
```

