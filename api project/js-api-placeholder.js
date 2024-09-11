function getusers (){
    return new Promise((resolve,reject)=>{

        axios.get ("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            let users = response.data
            document.getElementById("users").innerHTML = "";
            for(user of users){
            let content =`
                <div id="user"  onclick="userclick(${user.id},this)">
                <h2>${user.name}</h2>
                <h3>${user.email}</h3>
            </div>
            `
            document.getElementById("users").innerHTML += content;
        }
		
        })
        resolve()
        
    })
    
    }
    getusers ()

function getpost (userid){

    axios.get("https://jsonplaceholder.typicode.com/posts?userId="+userid)
    .then((response)=>{
        let posts = response.data
        document.getElementById("posts").innerHTML = "";
        for(post of posts){

            let content =`
                <div id="post">
                    <h2>${post.title}</h2>
                    <h3>${post.body}</h3>
                </div>
            `
            document.getElementById("posts").innerHTML += content;
        }
    })
    

}
getusers ()
.then(()=>{
    getpost (1);
})
.catch((error)=>{
    console.log(error);
})

function userclick(id,ele){
   let elementSelected= document.getElementsByClassName("selected");
   for(element of elementSelected){
    element.classList.remove("selected");
   }
    ele.classList.add("selected");
    getpost (id)
}