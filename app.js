function submit() {
  let userValue = document.getElementById("userWork").value;
  console.log(userValue);

  const li = document.createElement("li");
  li.innerHTML = userValue;
  li.className='create_li'
  console.log(li);
  listtt = document.getElementById("listt");

  console.log(listtt);

  const del = document.createElement("button");
  let edit = document.createElement("button");

  let div = document.createElement("div");
  div.className='timeeee'
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDate();
  let hours = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  div.innerHTML = `${day} - ${month} - ${year}   time  ${hours}:${minute}:${second}  `;
  console.log(div);

  del.textContent = "delete";
  edit.textContent = "check";
  del.className = "btnn";
  edit.className='btnn'
  console.log(del, edit);

  listtt.appendChild(edit);
  listtt.appendChild(del);
  listtt.appendChild(div);
  document.getElementById("userWork").value = "";

  // delbtn
  del.onclick = function () {
    liii = del.parentNode;
    liii.remove();
  };
  // delbtn

 
edit.onclick = function(){
  li.style.textDecoration='line-through'
}

  listtt.appendChild(li);
  li.appendChild(edit);
  li.appendChild(del);
  li.appendChild(div);
  document.getElementById("userWork").value = "";
}
