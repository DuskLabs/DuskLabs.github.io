var account = null;
        var merkleProof = null;

        var contract = null;
        const abi = [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "burnToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "bool",
                        "name": "shouldPause",
                        "type": "bool"
                    }
                ],
                "name": "pause",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "name": "publicMintAlpha",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "name": "publicMintObsidian",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "amounts",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeBatchTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "newURI",
                        "type": "string"
                    }
                ],
                "name": "setBaseURI",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bool",
                        "name": "shouldStartPublicSale",
                        "type": "bool"
                    }
                ],
                "name": "setPublicSale",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "merkleRoot",
                        "type": "bytes32"
                    }
                ],
                "name": "setWhitelistMerkleRoot",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bool",
                        "name": "shouldStartWhiteListSale",
                        "type": "bool"
                    }
                ],
                "name": "setWhiteListSale",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256[]",
                        "name": "values",
                        "type": "uint256[]"
                    }
                ],
                "name": "TransferBatch",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "TransferSingle",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "value",
                        "type": "string"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "URI",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "merkleProof",
                        "type": "bytes32[]"
                    }
                ],
                "name": "whiteListMintAlpha",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "merkleProof",
                        "type": "bytes32[]"
                    }
                ],
                "name": "whiteListMintObsidian",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "_numberMinted",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "accounts",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    }
                ],
                "name": "balanceOfBatch",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "baseURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isPublicSale",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isWhiteListSale",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "mintRate_Alpha",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "mintRate_Obsidian",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "teamAddresses",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "uri",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "whitelistMerkleRoot",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
        const address = "0xFb60b9E49ab2F867669F92f57bE5BC76608633bA";

        let WL = [
            "0xF6c7Db82Bb7e6E0CEa903689552DeEEe7cfF3493",
            "0xF6c7Db82Bb7e6E0CEa903689552DeEEe7cfF3493",
            "0xF6c7Db82Bb7e6E0CEa903689552DeEEe7cfF3493", // etc
            "0x2dA86faB578Cf39DEF9903e814a71992c5D0db27",
            "0x2dA86faB578Cf39DEF9903e814a71992c5D0db27",
            "0xeBb8Fe08C21A21FE789764ea005C746267c1c78D"
        ];


        let isPublic = true;
        let isAlpha = true;
        let publicPaused = false;
        let wlPaused = false;

        let maxMint;

        let currentMints = 1;
        let currentPrice = 0.15;
        

        //change these
        let maxAlphaMint = 2;
        let maxObsidianMint = 1;
        let alphaPrice = 0.15;
        let obsidianPrice = 0.25;
		let maxAlphaSupply = 500;
        let maxObsidianSupply = 250;


        const initialise = async () =>{
            console.log("initialised");
            maxMint = maxAlphaMint;

            const connectButton = document.getElementById("connectButton");
            const publicButton = document.getElementById("publicButton");
            const wlButton = document.getElementById("wlButton");
            const quantity = document.getElementById("quantity");
            const decrease = document.getElementById("decrease");
            const increase = document.getElementById("increase");
            const max = document.getElementById("max");
            const mintButton = document.getElementById("mintButton");
            const alphaButton = document.getElementById("alphaButton");
            const obsidianButton = document.getElementById("obsidianButton");

            connectButton.addEventListener('click', (e) =>{
                connectWallet();
            });
            connectButton.addEventListener('mouseover', (e) =>{
                connectButton.style.transition = "color 0.5s ease";
                connectButton.style.color = "black";
            });
            connectButton.addEventListener('mouseleave', (e) =>{
                connectButton.style.transition = "color 0.5s ease";
                connectButton.style.color = "white";
            });

            publicButton.addEventListener('click', (e) =>{
                loadPubPanel();

                toggleOnButton();
                if(publicPaused){
                    toggleOffButton();
                }
            });
            publicButton.addEventListener('mouseover', (e) =>{
                publicButton.style.transition = "color 0.5s ease";
                publicButton.style.color = "black";
            });
            publicButton.addEventListener('mouseleave', (e) =>{
                if(!isPublic){
                publicButton.style.transition = "color 0.5s ease";
                publicButton.style.color = "white";
                }
            });

            wlButton.addEventListener('click', (e) =>{
                isPublic = false;
                publicButton.style.color = "white";
                wlButton.style.color = "black";

                changePrice();

                toggleOnButton();
                if(wlPaused){
                    toggleOffButton();
                }
            });
            wlButton.addEventListener('mouseover', (e) =>{
                wlButton.style.transition = "color 0.5s ease";
                wlButton.style.color = "black";
            });
            wlButton.addEventListener('mouseleave', (e) =>{
                if(isPublic){
                wlButton.style.transition = "color 0.5s ease";
                wlButton.style.color = "white";
                }
            });

            alphaButton.addEventListener('click', (e) =>{
                loadAlphaPanel();
                setMintedbar();
            });
            alphaButton.addEventListener('mouseover', (e) =>{
                alphaButton.style.transition = "color 0.5s ease";
                alphaButton.style.color = "black";
            });
            alphaButton.addEventListener('mouseleave', (e) =>{
                if(!isAlpha){
                alphaButton.style.transition = "color 0.5s ease";
                alphaButton.style.color = "white";
                }
            });

            obsidianButton.addEventListener('click', (e) =>{
                loadObsidianPanel();
                setMintedbar();
            });
            obsidianButton.addEventListener('mouseover', (e) =>{
                obsidianButton.style.transition = "color 0.5s ease";
                obsidianButton.style.color = "black";
            });
            obsidianButton.addEventListener('mouseleave', (e) =>{
                if(isAlpha){
                obsidianButton.style.transition = "color 0.5s ease";
                obsidianButton.style.color = "white";
                }
            });

            decrease.addEventListener('click', (e) =>{
                if(currentMints !== 1){
                    currentMints--;
                    quantity.textContent = currentMints;
                    changePrice();
                }
            });

            increase.addEventListener('click', (e) =>{
                if(currentMints !== maxMint){
                    currentMints++;
                    quantity.textContent = currentMints;
                    changePrice();
                }
            });

            max.addEventListener('click', (e) =>{
                currentMints = maxMint;
                quantity.textContent = currentMints;
                changePrice();
            });
            max.addEventListener('mouseover', (e) =>{
                max.style.transition = "color 0.5s ease";
                max.style.color = "black";
            });
            max.addEventListener('mouseleave', (e) =>{
                max.style.transition = "color 0.5s ease";
                max.style.color = "white";
            });

            mintButton.addEventListener('mouseover', (e) =>{
                mintButton.style.transition = "color 0.5s ease";
                mintButton.style.color = "black";
            });
            mintButton.addEventListener('mouseleave', (e) =>{
                mintButton.style.transition = "color 0.5s ease";
                mintButton.style.color = "white";
            });
        }

        const loadPubPanel = () =>{
            const main = document.getElementById("main");
            const publicButton = document.getElementById("publicButton");
            const wlButton = document.getElementById("wlButton");

            isPublic = true;
            main.style.visibility = "visible";
            publicButton.style.color = "black";
            wlButton.style.color = "white";

            changePrice();
        }

        const loadAlphaPanel = () =>{
            const alpha = document.getElementById("alphaButton");
            const obsidian = document.getElementById("obsidianButton");

            isAlpha = true;
            maxMint = maxAlphaMint;
            alpha.style.color = "black";
            obsidian.style.color = "white";

            if(currentMints > maxMint){
                currentMints = maxMint;
                quantity.textContent = currentMints;
            }

            changePrice();
        }

        const loadObsidianPanel = () =>{
            const alpha = document.getElementById("alphaButton");
            const obsidian = document.getElementById("obsidianButton");

            isAlpha = false;
            maxMint = maxObsidianMint;
            obsidian.style.color = "black";
            alpha.style.color = "white";

            if(currentMints > maxMint){
                currentMints = maxMint;
                quantity.textContent = currentMints;
            }

            changePrice();
        }

        const connectWallet = async () =>{
        if(window.ethereum){
            await window.ethereum.send('eth_requestAccounts');
            window.web3 = new Web3(window.ethereum);

            var accounts = await web3.eth.getAccounts();
            account = accounts[0];

            contract = new web3.eth.Contract(abi, address);

            connectButton.style.visibility = 'hidden';
            document.getElementById("parent").style.visibility = "visible";
            document.getElementById("publicButton").style.visibility = "visible";
            document.getElementById("wlButton").style.visibility = "visible";

            checkIfWL();
            checkIfPublic();
            loadPubPanel();

			await checkIfPublic();
            await setMintedbar();

			if(publicPaused){
                toggleOffButton();
            }
        }
    }

        const calculatePrice = () =>{
            let basePrice = obsidianPrice;
            if(isAlpha){
                basePrice = alphaPrice;
            }
            currentPrice = currentMints * basePrice;
        }

        const changePrice = () =>{
            calculatePrice();
            document.getElementById("price").textContent = "Total Price: ".concat((currentPrice.toFixed(3).toString()), " ETH");
        }

        const findMerkleProof = () =>{
            const leaves = WL.map(x => keccak256(x));
		    const tree = new MerkleTree(leaves, keccak256, {sortPairs: true});
		    const buf2hex = x => '0x' + x.toString('hex');

		    console.log(buf2hex(tree.getRoot()));
		
		    const leaf = keccak256(account);
		    proof = tree.getProof(leaf).map(x => buf2hex(x.data));
        }

        const mint = async () =>{
            if(isPublic){
                if(isAlpha){
                    await contract.methods.publicMintAlpha(currentMints).send({from: account, value: (currentPrice * (10**18))});
                }
                else{
                    await contract.methods.publicMintObsidian(currentMints).send({from: account, value: (currentPrice * (10**18))});
                }
            }
            else{
                if(isAlpha){
                    await contract.methods.whiteListMintAlpha(currentMints, proof).send({from: account, value: (currentPrice * (10**18))});
                }
                else{
                    await contract.methods.whiteListMintObsidian(currentMints, proof).send({from: account, value: (currentPrice * (10**18))});
                }
            }
        }

        const checkIfWL = async () =>{
            findMerkleProof();

            const wlIsntPaused = await contract.methods.isWhiteListSale().call({from: account});
            const paused = await contract.methods.paused().call({from: account});

            if(proof === null || !wlIsntPaused || paused){
                wlPaused = true;
            }
        }

        const checkIfPublic = async () =>{
            const publicIsntPaused = await contract.methods.isPublicSale().call({from: account});
            const paused = await contract.methods.paused().call({from: account});

            if(paused || !publicIsntPaused){
                publicPaused = true;
            }
        }

        const toggleOffButton = () =>{
            const mintButton = document.getElementById("mintButton");

            mintButton.textContent = "YOU CANNOT MINT AT THIS TIME";
        }

        const toggleOnButton = () =>{
            const mintButton = document.getElementById("mintButton");

            mintButton.textContent = "MINT";
        }

        const configureMintedMessage = async () =>{
            let current;
            let maxSupply;
            
            if(isAlpha) {
                maxSupply = maxAlphaSupply;
                current = await contract.methods.totalSupply(0).call({from: account});
            }
            else {
                maxSupply = maxObsidianSupply;
                current = await contract.methods.totalSupply(1).call({from: account});
            }

            document.getElementById("totalMinted").textContent = `TOTAL MINTED: ${current}     :     TOTAL REMAINING: ${maxSupply - current}`;
        }

        const setMintedbar = async() =>{
            let current;
            let maxSupply;

            if(isAlpha) {
                maxSupply = maxAlphaSupply;
                current = await contract.methods.totalSupply(0).call({from: account});
            }
            else {
                maxSupply = maxObsidianSupply;
                current = await contract.methods.totalSupply(1).call({from: account});
            }

            let percent = (current / maxSupply) * 100;
            if(percent < 7.5){
                percent = 7.5;
            }

            document.getElementById("totalMintedBar").style.width = percent.toString().concat("%");
            configureMintedMessage();
        }
