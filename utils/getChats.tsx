export async function getChats() {
  const idInstance =
    localStorage.getItem("idInstance") &&
    JSON.parse(localStorage.getItem("idInstance")||'');
  const apiTokenInstance =
    localStorage.getItem("apiTokenInstance") &&
    JSON.parse(localStorage.getItem("apiTokenInstance")||'');
  if (idInstance && apiTokenInstance) {
    const res = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/getChats/${apiTokenInstance}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if(res){
      const chats = await res.json();
      return chats;
    }
    
  }
}
