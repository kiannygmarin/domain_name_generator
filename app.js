const { node } = require("webpack");

let pronoun = ['the','our','I'];
let adj = ['great', 'big', 'small' ];
let noun = ['jogger','racoon', 'cat'];
let verb= ['running','swimming', 'playing'];
let combinaciones= 0; 

for(let pr=0; pr<pronoun.length; pr++) {
    for(let ad=0; ad<adj.length; ad++) {
        for(let no=0; no<noun.length; no++) {
            for(let ve=0; ve<verb.length; ve++) {
                console.log(pronoun[pr]+adj[ad]+noun[no]+verb[ve]+".com");
                combinaciones++;
            }
    
        }
    }
}
console.log(combinaciones)

