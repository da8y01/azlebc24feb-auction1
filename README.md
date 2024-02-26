# Auctions Proof of Concept

## Run Locally

Clone the project

```bash
  git clone https://github.com/da8y01/azlebc24feb-auction1
```

Go to the project directory

```bash
  cd azlebc24feb-auction1
```

Install dependencies

```bash
  npm install
```

```bash
# only for mac
codesign -s - .bitcoin/bin/bitcoind
```

```bash
npm run btc:start
```

In another terminal run:

```bash
npm run icp:start
```

Open another terminal and run:

```bash
npm run icp:deploy:local
```

## Auctions end points

* `POST /auction { "title": "Some title", "description": "Optional additional text." }`

* `POST /offer { "bidder": "ID PRINCIPAL OF THE BIDDER", "auctionId": "ID PRINCIPAL OF THE AUCTION", "amount": "NUMBER OF THE AMOUNT" }`

# How to mint ckBTC

Run the following command:

```bash
# only for mac
codesign -s - .bitcoin/bin/bitcoin-cli
```

```bash
# Run three times this command, but wait 1 second between each exacution
npm run btc:mint --address=$ADDRESS
```

Wait for 5 around seconds and make a request to `PUT /users/:userId/balance`

Then, you can verify the user balance in this endpoint:

`GET /users/:userId/balance`

# ToDo

* Validaciones de roles en las rutas.
* Modificar la lógica para actuar como el usuario logueado al interactuar con formularios.
