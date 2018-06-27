# dapp_solidity
Created a dapp for getting used to solidity.
This dapp should be running in a private network.
Ive worked on this in Ubuntu, Linux.

## Using GETH

### 1. Install GETH
```
$ wget https://gethstore.blob.core.windows.net/builds/geth-linux-amd64-1.8.2-b8b9f7f4.tar.gz
```
```
$ tar -zxvf [file name]
```
### 2. Install Ethereum Dependency
```
$ sudo apt-get install software-properties-common
```
```
$ sudo add-apt-repository -y ppa:ethereum/ethereum
```
```
$ sudo apt-get update
```
### 3. Create genesis block with sample.json
- Before running this, You should have sample.json
```
$ ./geth --datadir ./[any directory that you want to store extra data] init ./sample.json
```
- This is an example. Save it as sample.json in the directory.
```
{
  "config": {
    "chainId": 42,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip150Hash":"0x0000000000000000000000000000000000000000000000000000000000000000",
    "eip155Block": 0,
    "eip158Block": 0
  },
  "nonce": "0x0000000000000042",
  "timestamp": "0x00",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "extraData": "0x00",
  "gasLimit": "0x4c4b40",
  "difficulty": "0x0400",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x0000000000000000000000000000000000000000",
  "alloc": {

  },
  "number" : "0x0",
  "gasUsed": "0x0",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"
}
```
### 4. Run the private network
```
$ ./geth --verbosity 6 --datadir ./enakee --nodiscover --syncmode 'full' --port 30411 --rpc --rpcaddr '0.0.0.0' --rpcport 6845 --rpccorsdomain "*" --rpcapi 'personal,db,eth,net,web3,txpool,miner' --networkid 37663 --gasprice '1'
```
### 5. Run ipc
```
$ ./geth attach ipc:./geth.ipc
```
### 6. 다른 서버와 내 서버 동기화 시키기
```
admin.addPeer("peerData")
```
- You should set the peerData
### 7. Check If 동기화 did properly
```
admin.peers
```
- - -

## Setting

### 1. Install nodejs
```
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```
### 2. Go to the ../dapp
```
$ cd /home/..
```
### 3. Install npm packages
```
$ sudo npm install
```
- If there is an error which is related to "node-gyp",
```
$ sudo -s
```
```
$ sudo npm install -g node-gyp
```
```
$ sudo npm install scrypt
```
### 4. Install supervisor
```
$ npm install supervisor -g
```
### 5. Run node js
```
$ supervisor app.js
```
### 6. Check if the server is running properly
```
http://localhost:8081/
```
- - -

## How It Works

1. As soon as you get into the localhost, It will unlock your first account. (Check the log)
2. Deploy a contract and copy the contract address from the log.
3. Paste the address to At section and click the "At" button so that It can make an js object through ABI.
4. Create a new campaign
5. You will get a campaign ID (you can see it from the log). You can check the status of the campaign by clicking "Check(call)", send the ether you have earned to your address that you put in Beneficiery when you were creating the campaign by clicking "Check(send)".


