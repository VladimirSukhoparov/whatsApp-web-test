export async function receiveNotification() {
    const idInstance =
      localStorage.getItem("idInstance") &&
      JSON.parse(localStorage.getItem("idInstance")||'');
    const apiTokenInstance =
      localStorage.getItem("apiTokenInstance") &&
      JSON.parse(localStorage.getItem("apiTokenInstance")||'');
    if (idInstance && apiTokenInstance) {
      const res = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const receiveNotification = await res.json();
      return receiveNotification;
    }
  }