class Blockchain {
  constructor(){
    this.chain = [this.createGenesisBlock()]
  }

  createGenesisBlock(){
    return new Block(0, 1505389735691, "Genesis Block", "0")
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1]
  }

  getLatestIndex(){
    return this.chain[this.chain.length - 1].index
  }

  isValid(data){
    console.log("data: " + data);
    return true
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    if(this.isValid(newBlock)){
      this.chain.push(newBlock)
    }
  }
}
