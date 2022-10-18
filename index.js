const LinageeNameRegistrar = class {
    constructor(Provider) {
      this.Provider = Provider;

      const linagee_abi = JSON.parse(readFileSync("./linageeAbi.json"));;
      const linagee_address = "0x5564886ca2C518d1964E5FCea4f423b41Db9F561";
      this.linagee_contract = new Provider.eth.Contract(linagee_abi, linagee_address);

      const wrapper_abi = JSON.parse(readFileSync("./wrapperAbi.json"));;
      const wrapper_address = "0x2Cc8342d7c8BFf5A213eb2cdE39DE9a59b3461A7";
      this.wrapper_contract = new Provider.eth.Contract(wrapper_abi, wrapper_address);

      const resolver_abi =JSON.parse(readFileSync("./resolverAbi.json"));;
      const resolver_address = "";
      this.resolver_contract = new Provider.eth.Contract(resolver_abi, resolver_address);
      }

      //--------------LINAGEE---------------------------

      owner(nameBytes) {
        return this.wrapper_contract.methods.owner(nameBytes).call((err, result) => {
          if(err){
            console.error('Error: ', err);
            return err;
            // handle the error here
          } else {
          return result;
        }
        });
      }

      primaryAddress(nameBytes) {
        return this.wrapper_contract.methods.addr(nameBytes).call((err, result) => {
          if(err){
            console.error('Error: ', err);
            return err;
            // handle the error here
          } else {
          return result;
        }
        });
      }

      subregistrant(nameBytes) {
        return this.wrapper_contract.methods.register(nameBytes).call((err, result) => {
          if(err){
            console.error('Error: ', err);
            return err;
            // handle the error here
          } else {
          return result;
        }
        });
      }

      content(nameBytes) {
        return this.wrapper_contract.methods.content(nameBytes).call((err, result) => {
          if(err){
            console.error('Error: ', err);
            return err;
            // handle the error here
          } else {
          return result;
        }
        });
      }

      name(address) {
        return this.wrapper_contract.methods.name(address).call((err, result) => {
          if(err){
            console.error('Error: ', err);
            return err;
            // handle the error here
          } else {
          return result;
        }
        });
      }

      reserve(nameBytes, account) {
        return this.linagee_contract.methods.reserve(nameBytes).send({from: account}).once("error", (err) => {
            console.log(err);
          })
          .then((receipt) => {
          return receipt;
        }).catch(function(error){
          return error;
        });
      }

      disown(nameBytes, account) {
        return this.linagee_contract.methods.disown(nameBytes).send({from: account}).once("error", (err) => {
            console.log(err);
          })
          .then((receipt) => {
          return receipt;
        }).catch(function(error){
          return error;
        });
      }

      setAddress(nameBytes, bool, account) {
        return this.linagee_contract.methods.setAddress(nameBytes, account.address, bool).send({from: account}).once("error", (err) => {
            console.log(err);
          })
          .then((receipt) => {
          return receipt;
        }).catch(function(error){
          return error;
        });
      }

      setSubRegistrar(nameBytes, account) {
        return this.linagee_contract.methods.setSubRegistrar(nameBytes, account.address).send({from: account}).once("error", (err) => {
            console.log(err);
          })
          .then((receipt) => {
          return receipt;
        }).catch(function(error){
          return error;
        });
      }

      setContent(nameBytes, contentBytes, account) {
        return this.linagee_contract.methods.setContent(nameBytes, conentBytes).send({from: account}).once("error", (err) => {
            console.log(err);
          })
          .then((receipt) => {
          return receipt;
        }).catch(function(error){
          return error;
        });
      }






      //--------------WRAPPER---------------------------

      getNameOwner(nameBytes) {
        return this.wrapper_contract.methods.getNameOwner(nameBytes).call((err, result) => {
          if(err){
            console.error('Error: ', err);
            return err;
            // handle the error here
          } else {
          return result;
        }
        });
      }

      createWrapper(nameBytes, account) {
        return this.wrapper_contract.methods.createWrapper(nameBytes).send({from: account}).once("error", (err) => {
            console.log(err);
          })
          .then((receipt) => {
          return receipt;
        }).catch(function(error){
          return error;
        });
      }

      wrap(nameBytes, account) {
        return this.wrapper_contract.methods.wrap(nameBytes).send({from: account}).once("error", (err) => {
            console.log(err);
          })
          .then((receipt) => {
          return receipt;
        }).catch(function(error){
          return error;
        });
      }

      unwrap(tokenId, account) {
        return this.wrapper_contract.methods.unwrap(tokenId).send({from: account}).once("error", (err) => {
            console.log(err);
          })
          .then((receipt) => {
          return receipt;
        }).catch(function(error){
          return error;
        });
      }

      
      //------------------------------------------------

  
  };