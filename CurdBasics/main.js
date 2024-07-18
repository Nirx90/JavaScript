let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let pc = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidatioin();
});

let formValidatioin = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be Blank";
    console.log("failure");
  } else {
    console.log("Success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
    pc++;
  posts.innerHTML += `<div>
                    
                    <p>${data.text}</p>
                    <span class="options">
                        <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
                        <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
                    </span>
                </div>`;
    input.value = "";
};



let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}