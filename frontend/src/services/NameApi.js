const URL = "http://localhost:8080/members";
const Authorization = "user:password";
const hash = btoa(Authorization);

export class NameApi {
  getMembers() {
    const headers = {
      method: "get",
      headers: {
        Authorization: `Basic ${hash}`,
      },
    };
    return fetch(URL, headers).then((response) => response.json());
  }

  addMember(member) {
    const headers = {
      method: "post",
      headers: {
        Authorization: `Basic ${hash}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    };
    return fetch(URL, headers).then((response) => response.json());
  }

  deleteMember(id) {
    const headers = {
      method: "delete",
      headers: {
        Authorization: `Basic ${hash}`,
      },
    };
    return fetch(URL + "/" + id, headers).then((response) => response.json());
  }

  editMember(id, member) {
    const headers = {
      method: "put",
      headers: {
        Authorization: `Basic ${hash}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    };
    return fetch(URL + "/" + id, headers).then((response) => response.json());
  }
}
