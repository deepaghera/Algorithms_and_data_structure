let user = {
    age : 54,
    name : "kylie",
    magic : true,
    scream : function() {
        console.log("Ahhhh!");
    }
}

console.log(user.age); // BIG_O O(1)
user.spell = "abra ka dabra";  // BIG_O O(1)
user.scream(); //// BIG_O O(1)
console.log(user);