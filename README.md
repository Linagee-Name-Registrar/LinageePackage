# LinageePackage

const web3 = new Web3(Web3.givenProvider)

const lnr = new LNR(web3)

## Linagee Contract

Get owner of of unwrapped name
```
lnr.owner(nameBytes)
.then(function(result){
    console.log(result)
})
```

Reserve Name
```
lnr.reserve(nameBytes, account).then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
```

Transfer Name
```
lnr.transfer(nameBytes, address, account).then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
```

## Wrapper Contract

Get owner of wrapped name
```
lnr.getNameOwner(nameBytes)
.then(function(result){
    console.log(result)
})
```

Token ID to Name
```
lnr.idToName(tokenId)
.then(function(result){
    console.log(result)
})
```

Name to Token ID
```
lnr.nameToId(nameBytes)
.then(function(result){
    console.log(result)
})
```

Token of Owner By Index
```
lnr.tokenOfOwnerByIndex(address, index)
.then(function(result){
    console.log(result)
})
```


Create Wrapper
```
lnr.createWrapper(nameBytes, account).then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
```

Wrap Name
```
lnr.wrap(nameBytes, account).then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
```
