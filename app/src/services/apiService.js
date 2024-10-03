export default class ApiService { // Assurez-vous d'utiliser "default" ici
  async post(url, data) {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}