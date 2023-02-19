// object destructuring(object ar smy variable ar property ar nam same dite hbe...value paoar jonno)
const man={
    name:'shovan',
    age:27,
    district:'tangail',
    division:'dhaka',
    goal:'jnina'
}
const {name}=man;
console.log(name);
const {id,password}={id:'sho12',password:'fwkfnwn230o30',device:'samsung'};
console.log(id,password);
// array destructuring(nam same dite hy na..ja ecce dite pari...arrat te joto gula data thak na kn..jotogular nam dibo sudhu oigulai pabo)
// simple way
const [a,b,c]=[21,34,56,68,65]
console.log(a,b,c);
// productive way
const nayoks=['jdu','modhu','kdu','jadu'];
const [boka,vodai,hudai,hablu]=nayoks;
console.log(vodai);
// function theke array return korleo destructuring kora jay....aivabe
function ajob(){
    return ['alia','suraiya','moraiya'];
}
const [bedi,cousin,vauta]=ajob();
console.log(cousin);
