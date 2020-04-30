class HashTable {
    constructor(size) {
        this.data = new Array(size);
    } //                                                                                                                                                        //
    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++ ){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
       return hash;
    }
    set(key,value) {
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
           // this.data[address].push([key,value]);
            //console.log(this.data,address);
           // this.data[this._hash(key)] = [key,value];
        }
        this.data[address].push([key,value]);
        return this.data;
    }
    get(key){
        //let address = this._hash(key)
        //return this.data[address];
        const address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key) {
                return currentBucket[i][1]
                }
            }
        }
    return undefined;
  }
    

}

const myHashTable = new HashTable(50);
myHashTable.set("name" , "deep");
//console.log(myHashTable);
console.log(myHashTable.get("name"));