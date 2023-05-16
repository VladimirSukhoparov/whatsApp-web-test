export async function getStateInstance({idInstance, apiTokenInstance }) {
    try {
         const res = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const stateInstance = await res.json();
    return stateInstance;
} catch (error) {
   console.error();
    }
  }