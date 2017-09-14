class Blockchain {
  constructor(){
    this.chain = [this.createGenesisBlock()]
  }

  createGenesisBlock(){
    return new Block(0, "01/01/2017", "Genesis Block", "0")
  }

  getLatestBlock(){
    return this.chain[this.chain.lenght - 1]
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash()
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
  }
}
