let prompt = document.querySelector("#prompt");
let chatContainer = document.querySelector(".chat-container");
function createChatBox(html, classes){
  let div = document.createElement("div")
  div.innerHTML = html
  div.classList.add(classes)
  return div
}

function handleChatResponse(message){
  let html = `<img src="U.png" alt="" id="userImage" width="50">

    <div class="user-chat-area">
    ${message}
    </div>`
    prompt.value = ""
    let UserChatBox = createChatBox(html, "user-chat-box")
    chatContainer.appendChild(UserChatBox)

    
     setTimeout(() =>{
      let html = ` <img src="Ai.png" alt="" id="aiImage" width="60">
         <div class="ai-chat-area">
    </div>`
    let aiChatBox = createChatBox(html, "ai-chat-box")
    chatContainer.appendChild(aiChatBox)

    },600)
}

prompt.addEventListener("keydown", (e) => {
 if(e.key == "Enter"){
  handleChatResponse(prompt.value)
 }
});


