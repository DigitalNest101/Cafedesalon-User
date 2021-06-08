const userForm = document.querySelector('#userForm');
// var inputValue = document.getElementById("myInput").value;
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(userForm.name.value === ""){
        alert("Please Enter Full Detail");
    }
    db.collection('cafe').add({
        Name: userForm.name.value,
        City: userForm.city.value,
        Phone:userForm.phone.value,
        Date:userForm.date.value,
        Time:userForm.time.value,
        Member: userForm.member.value
    });
    userForm.name.value = "";
    userForm.city.value = "";
    userForm.phone.value = "";
    userForm.date.value = "";
    userForm.time.value = "";
    userForm.member.value = "";

    //CHANGE THE URL BELOW TO TRANSFER USER TO THAT URL AFTER FORM SUBMISSION
    // location.replace("admin.html");
});