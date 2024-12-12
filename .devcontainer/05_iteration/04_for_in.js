// forof on object

const myObj={
    'game1': "NFS",
    'game2':"spiderman"
}
// for (const [key, value] of myObj) {//this iteration is not allowded
//     console.log(key, ':-', value);
// }

const myObject={
    js:'javascript',
    cpp:'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);

}
const programming=["js","rd","py","java","cpp"]
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
    
}

//forin on Map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);//not itertable
    
    
}