# StartupMarketplaceDapp

## Project Structure for Dapp
* /migrations - a directory that holds smart contract migrations
* /src - a directory that contains the following:
    * /abis/ - a directory that holds smart contract builds
    * /components/ - a directory that holds the javascript files. 
    * /contracts/ - a directory that holds the smart contracts: ‘StartUpDapp.sol’ and ‘Migrations.sol’ 
* /test - a directory that holds smart contract tests
* package.json - a list of all the dependencies
* truffle-config.js - truffle configuration file

## App Installation
The technology Dapp uses: 
* React, Python, Truffle, Solidity, Ganache, MetaMask, web3js
### Dependencies: 
* Ganche Installed here: https://trufflesuite.com/ganache/ 
* truffle ``` npm install -g truffle@5.0.5 ```
* MetaMask extension installed here: https://metamask.io/


Open Terminal and git clone project and navigate to project name.
1. ``` truffle compile ``` (compiles the smart contract to make sure everything works)
2. Make sure Ganache is running 
    1. Open Ganache
	  2. Create New WorkSpace 
	  3. Workspace Name ‘StartUp’
	  4. Add truffle project - Select the ‘Truffle-config.js’ from this project 
	  5. Save Workspace
	  *Make sure in Ganache the RPC Server is : ‘HTTP://127.0.0.1:7545’ and Network ID is : 5777 . Should be the same inside ‘truffle-config.js’ file under host        and port this is how it is talking to Ganache , our local blockchain
4. Truffle Migrate (migrates the smart contracts to the network)

To start app in browser navigate to project file and inside another terminal ```npm run start```

Importing an account from Ganache to Metamask:
1. In Ganache select any account from the accounts list and select ‘Show Keys’
2. Copy the ‘Private Key’
3. Click on Metamask then ‘Import Account’, Select Type: ‘Private Key’, Paste private key and select Import
4. Rename account to ‘Borrower’
5. Do Same steps for another account called ‘Lender’ (*make sure to use a different private key)

Connecting Metamask to Ganache:

6. From Metamask Click on ‘Network’ and create/connect to the same network that Ganache is running on (‘HTTP://127.0.0.1:7545’)
	You will know it is connected when you have the same balance as your account in Ganache.
