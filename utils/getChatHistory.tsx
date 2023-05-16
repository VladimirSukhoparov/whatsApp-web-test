export async function getChatHistory({ userID }) {
  const idInstance =
    localStorage.getItem("idInstance") &&
    JSON.parse(localStorage.getItem("idInstance")||'');
  const apiTokenInstance =
    localStorage.getItem("apiTokenInstance") &&
    JSON.parse(localStorage.getItem("apiTokenInstance")||'');
  if (idInstance && apiTokenInstance) {
    const res = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId: userID, count: 100 }),
      }
    );
    const chatHistory = await res.json();
    return chatHistory;
  }
}
