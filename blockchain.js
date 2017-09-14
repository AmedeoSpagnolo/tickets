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

  dataIsValid(data){
    return true
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    if(this.dataIsValid(newBlock)){
      this.chain.push(newBlock)
    }
  }
}
