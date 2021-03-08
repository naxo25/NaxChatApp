//const url = 'http://localhost:3000';
const url = 'https://swnotis.herokuapp.com';
const PUBLIC_VAPID_KEY =
  "BCcsB-8DsjFoKfmU7Vz01i40jlTZV5XVQaQEhwkGrXCjIdSUObwL5p1_EEuPS-0ZeLO94FFwNhJXPFS9EqoiIcs";

const subscription = async () => {

  // Service Worker
  const register = await navigator.serviceWorker.register("worker2.js");

  // Listen Push Notifications
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
  });

  //console.log(subscription)
  // Send Notification
  await fetch(url + "/subscription/" + localStorage.email, {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "Content-Type": "application/json"
    }
  });

};

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Service Worker Support
if ("serviceWorker" in navigator) {
  subscription().catch(err => console.log(err));
}