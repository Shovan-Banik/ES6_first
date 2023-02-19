document.getElementById('add-bg').addEventListener('click',function(){
    const friends=document.getElementsByClassName('friend');
    for(let friend of friends){
        friend.style.background='red';
    }
})
document.getElementById('center').addEventListener('click',function(){
    const friendTwo=document.getElementById('friend-2');
    friendTwo.style.textAlign='center';
})
document.getElementById('add-new').addEventListener('click',function(){
    const container=document.getElementById('div-container');
    const newFriend=document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML=`
    <h3>Friend-6</h3>
    <p>New friend added</p>
    `
    container.appendChild(newFriend);
})