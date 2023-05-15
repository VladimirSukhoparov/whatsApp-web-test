const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`);
};

class Api {
  _stateInstance: any;
  _url: any;
  _idInstance: any;
  _apiTokenInstance: any;
  constructor({ url, idInstance, apiTokenInstance, stateInstance }) {
    this._url = url;
    this._idInstance = idInstance;
    this._apiTokenInstance = apiTokenInstance;
    this._stateInstance = stateInstance;
  }

  getState({ idInstance, apiTokenInstance }) {
    const requestUrl = `${this._url}waInstance${
      this._idInstance ? this._idInstance : idInstance
    }/getStateInstance/${
      this._apiTokenInstance ? this._apiTokenInstance : apiTokenInstance
    }`;
    return fetch(requestUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(onResponse);
  }

  getSettings({ idInstance, apiTokenInstance }) {
    const requestUrl = `${this._url}waInstance${this._idInstance ? this._idInstance : idInstance}/getSettings/${this._apiTokenInstance ? this._apiTokenInstance : apiTokenInstance}`;
    return (
      fetch(requestUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(onResponse)
    );
  }

  getAvatar(props) {
    const requestUrl = `${this._url}waInstance${this._idInstance}/getAvatar/${this._apiTokenInstance}`;
    return (
        props &&
      fetch(requestUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId: props }),
      }).then(onResponse)
    );
  }

  getChats({ idInstance, apiTokenInstance }) {
    const requestUrl = `${this._url}waInstance${this._idInstance ? this._idInstance : idInstance}/getChats/${this._apiTokenInstance ? this._apiTokenInstance : apiTokenInstance}`;
    return (
      fetch(requestUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(onResponse)
    );
  }

  getChatHistory({ userID }) {
    const requestUrl = `${this._url}waInstance${this._idInstance}/getChatHistory/${this._apiTokenInstance}`;
    return (
      userID &&
          fetch(requestUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ chatId: userID, count: 100 }),
          }).then(onResponse))
  }
}

export default Api;
