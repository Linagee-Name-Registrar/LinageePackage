# LinageePackage

const web3 = new Web3(Web3.givenProvider)

const lnr = new LNR(web3)

## Wrapper Contract

Get owner of wrapped name

lnr.getNameOwner(nameBytes)
.then(function(result){
    console.log(result)
})



Create Wrapper
lnr.createWrapper(nameBytes, account).then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})

Wrap Name
lnr.wrap(nameBytes, account).then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})

## Linagee Contract

Get owner of of unwrapped name
lnr.owner(nameBytes)
.then(function(result){
    console.log(result)
})

Reserve Name
lnr.reserve(nameBytes, account).then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})

Transfer Name
lnr.transfer(nameBytes, address, account).then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})

