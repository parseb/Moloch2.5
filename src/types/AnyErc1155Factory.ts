/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AnyErc1155 } from "./AnyErc1155";

export class AnyErc1155Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AnyErc1155> {
    return super.deploy(overrides || {}) as Promise<AnyErc1155>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AnyErc1155 {
    return super.attach(address) as AnyErc1155;
  }
  connect(signer: Signer): AnyErc1155Factory {
    return super.connect(signer) as AnyErc1155Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AnyErc1155 {
    return new Contract(address, _abi, signerOrProvider) as AnyErc1155;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201909152600f81526e68747470733a2f2f5552494261736560881b60208201526200004a6301ffc9a760e01b62000080565b620000558162000105565b62000067636cdb3d1360e11b62000080565b620000796303a24d0760e21b62000080565b50620001ca565b6001600160e01b03198082161415620000e0576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b80516200011a9060039060208401906200011e565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620001565760008555620001a1565b82601f106200017157805160ff1916838001178555620001a1565b82800160010185558215620001a1579182015b82811115620001a157825182559160200191906001019062000184565b50620001af929150620001b3565b5090565b5b80821115620001af5760008155600101620001b4565b61175d80620001da6000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c80634e1273f4116100665780634e1273f414610365578063696a50b4146104d8578063a22cb4651461050a578063e985e9c514610538578063f242432a1461056657610092565b8062fdd58e1461009757806301ffc9a7146100d55780630e89341c146101105780632eb2c2d6146101a2575b600080fd5b6100c3600480360360408110156100ad57600080fd5b506001600160a01b03813516906020013561062f565b60408051918252519081900360200190f35b6100fc600480360360208110156100eb57600080fd5b50356001600160e01b03191661069e565b604080519115158252519081900360200190f35b61012d6004803603602081101561012657600080fd5b50356106bd565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016757818101518382015260200161014f565b50505050905090810190601f1680156101945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610363600480360360a08110156101b857600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156101eb57600080fd5b8201836020820111156101fd57600080fd5b803590602001918460208302840111600160201b8311171561021e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561026d57600080fd5b82018360208201111561027f57600080fd5b803590602001918460208302840111600160201b831117156102a057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102ef57600080fd5b82018360208201111561030157600080fd5b803590602001918460018302840111600160201b8311171561032257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610755945050505050565b005b6104886004803603604081101561037b57600080fd5b810190602081018135600160201b81111561039557600080fd5b8201836020820111156103a757600080fd5b803590602001918460208302840111600160201b831117156103c857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561041757600080fd5b82018360208201111561042957600080fd5b803590602001918460208302840111600160201b8311171561044a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a53945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156104c45781810151838201526020016104ac565b505050509050019250505060405180910390f35b6100c3600480360360608110156104ee57600080fd5b506001600160a01b038135169060208101359060400135610b3f565b6103636004803603604081101561052057600080fd5b506001600160a01b0381351690602001351515610b7c565b6100fc6004803603604081101561054e57600080fd5b506001600160a01b0381358116916020013516610c6b565b610363600480360360a081101561057c57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156105bb57600080fd5b8201836020820111156105cd57600080fd5b803590602001918460018302840111600160201b831117156105ee57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c99945050505050565b60006001600160a01b0383166106765760405162461bcd60e51b815260040180806020018281038252602b8152602001806115b8602b913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107495780601f1061071e57610100808354040283529160200191610749565b820191906000526020600020905b81548152906001019060200180831161072c57829003601f168201915b50505050509050919050565b81518351146107955760405162461bcd60e51b81526004018080602001828103825260288152602001806116df6028913960400191505060405180910390fd5b6001600160a01b0384166107da5760405162461bcd60e51b815260040180806020018281038252602581526020018061160c6025913960400191505060405180910390fd5b6107e2610e64565b6001600160a01b0316856001600160a01b0316148061080d575061080d85610808610e64565b610c6b565b6108485760405162461bcd60e51b81526004018080602001828103825260328152602001806116316032913960400191505060405180910390fd5b6000610852610e64565b9050610862818787878787610a4b565b60005b845181101561096357600085828151811061087c57fe5b60200260200101519050600085838151811061089457fe5b60200260200101519050610901816040518060600160405280602a8152602001611663602a91396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002054610e699092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a16815220546109389082610f00565b60009283526001602081815260408086206001600160a01b038d168752909152909320555001610865565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156109e95781810151838201526020016109d1565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610a28578181015183820152602001610a10565b5050505090500194505050505060405180910390a4610a4b818787878787610f61565b505050505050565b60608151835114610a955760405162461bcd60e51b81526004018080602001828103825260298152602001806116b66029913960400191505060405180910390fd5b6060835167ffffffffffffffff81118015610aaf57600080fd5b50604051908082528060200260200182016040528015610ad9578160200160208202803683370190505b50905060005b8451811015610b3757610b18858281518110610af757fe5b6020026020010151858381518110610b0b57fe5b602002602001015161062f565b828281518110610b2457fe5b6020908102919091010152600101610adf565b509392505050565b6000610b4b60046111e0565b6000610b5760046111e9565b9050610b74858285604051806020016040528060008152506111ed565b949350505050565b816001600160a01b0316610b8e610e64565b6001600160a01b03161415610bd45760405162461bcd60e51b815260040180806020018281038252602981526020018061168d6029913960400191505060405180910390fd5b8060026000610be1610e64565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610c25610e64565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416610cde5760405162461bcd60e51b815260040180806020018281038252602581526020018061160c6025913960400191505060405180910390fd5b610ce6610e64565b6001600160a01b0316856001600160a01b03161480610d0c5750610d0c85610808610e64565b610d475760405162461bcd60e51b81526004018080602001828103825260298152602001806115e36029913960400191505060405180910390fd5b6000610d51610e64565b9050610d71818787610d62886112f5565b610d6b886112f5565b87610a4b565b610db8836040518060600160405280602a8152602001611663602a913960008781526001602090815260408083206001600160a01b038d1684529091529020549190610e69565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054610def9084610f00565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4610a4b818787878787611339565b335b90565b60008184841115610ef85760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ebd578181015183820152602001610ea5565b50505050905090810190601f168015610eea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610f5a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b610f73846001600160a01b03166114aa565b15610a4b57836001600160a01b031663bc197c8187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015611001578181015183820152602001610fe9565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015611040578181015183820152602001611028565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561107c578181015183820152602001611064565b50505050905090810190601f1680156110a95780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b1580156110ce57600080fd5b505af19250505080156110f357506040513d60208110156110ee57600080fd5b505160015b611188576110ff6114b6565b8061110a5750611151565b60405162461bcd60e51b8152602060048201818152835160248401528351849391928392604401919085019080838360008315610ebd578181015183820152602001610ea5565b60405162461bcd60e51b815260040180806020018281038252603481526020018061155c6034913960400191505060405180910390fd5b6001600160e01b0319811663bc197c8160e01b146111d75760405162461bcd60e51b81526004018080602001828103825260288152602001806115906028913960400191505060405180910390fd5b50505050505050565b80546001019055565b5490565b6001600160a01b0384166112325760405162461bcd60e51b81526004018080602001828103825260218152602001806117076021913960400191505060405180910390fd5b600061123c610e64565b905061124e81600087610d62886112f5565b60008481526001602090815260408083206001600160a01b038916845290915290205461127b9084610f00565b60008581526001602090815260408083206001600160a01b03808b16808652918452828520959095558151898152928301889052815190948616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a46112ee81600087878787611339565b5050505050565b60408051600180825281830190925260609182919060208083019080368337019050509050828160008151811061132857fe5b602090810291909101015292915050565b61134b846001600160a01b03166114aa565b15610a4b57836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156113da5781810151838201526020016113c2565b50505050905090810190601f1680156114075780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561142a57600080fd5b505af192505050801561144f57506040513d602081101561144a57600080fd5b505160015b61145b576110ff6114b6565b6001600160e01b0319811663f23a6e6160e01b146111d75760405162461bcd60e51b81526004018080602001828103825260288152602001806115906028913960400191505060405180910390fd5b3b151590565b60e01c90565b600060443d10156114c657610e66565b600481823e6308c379a06114da82516114b0565b146114e457610e66565b6040513d600319016004823e80513d67ffffffffffffffff81602484011181841117156115145750505050610e66565b8284019250825191508082111561152e5750505050610e66565b503d8301602082840101111561154657505050610e66565b601f01601f191681016020016040529150509056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e73666572455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373a2646970667358221220cc8e29314280636bab05aa59e2a323200c8adab6c1e9e08a60146939a70420c464736f6c63430007050033";