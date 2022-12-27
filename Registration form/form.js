let arrVal = [{name:"yasser",mail:"yasser@mail.com",website:"www.yasser.com",img:"https://i.kym-cdn.com/entries/icons/mobile/000/037/848/cover2.jpg",gender:"Male",checkval:["Html","CSS","JS"]},];
getData=(e)=>{
    e.preventDefault();
let Value = {name:"",mail:"",website:"",img:"",gender:"",checkval:[]};
Value.name = document.getElementsByClassName('name')[0].value;
Value.mail = document.getElementsByClassName('email')[0].value;
Value.website = document.getElementsByClassName('website')[0].value;
Value.img = document.getElementsByClassName('img-link')[0].value;

if(document.getElementsByClassName('male')[0].checked) {
    Value.gender = "Male";
}
else if(document.getElementsByClassName('female')[0].checked) {
    Value.gender = "Female";
}
else{
    Value.gender = "Other";
}

var markedCheckbox = document.getElementsByClassName('skills');

for(var checkbox of markedCheckbox) {
    if(checkbox.checked)
    Value.checkval.push(checkbox.value);
}
arrVal.push(Value);
console.log(arrVal);
displayData();  
}
displayData=()=>{
let tableData ="";
let Value=arrVal;
Value.forEach(function(val){ 
    let currentRow = `
    <tr class="values" id="value">
    <td>
        <ul>
            <li>
                <h4>Name: ${val.name}</h4>
            </li>
            <li>Gender: ${val.gender}</li>
            <li>Mail: <a href=${val.mail}>${val.mail}</a></li>
            <li>Website: <a href=${val.website}>${val.website}</a> </li>
            <li>Skills: ${val.checkval}</li> 
        </ul>
    </td>
    <td>
         <img src=${val.img} /> 
    </td>
</tr>`
tableData+=currentRow;
});
document.getElementById('display').innerHTML = tableData; 
}
displayData();



