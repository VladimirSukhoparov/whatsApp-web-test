export async function sendMessage({ userID, msg }) {
    const idInstance =
      localStorage.getItem("idInstance") &&
      JSON.parse(localStorage.getItem("idInstance")||'');
    const apiTokenInstance =
      localStorage.getItem("apiTokenInstance") &&
      JSON.parse(localStorage.getItem("apiTokenInstance")||'');
    if (idInstance && apiTokenInstance) {
      const res = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chatId: userID, message: msg }),
        }
      );
      const sendMessage = await res.json();
      return sendMessage;
    }
  }