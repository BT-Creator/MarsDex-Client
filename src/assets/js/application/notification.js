"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    if ("serviceWorker" in navigator){
        navigator.serviceWorker.register("sw.js")
        navigator.serviceWorker.ready.then(() => registerForNotifications());
    }
}

function registerForNotifications() {
    Notification.requestPermission().then(permission => {
        if(permission === "granted") {
            registerPush();
        } else if (permission === "denied") {
            console.log("Denied");
        } else if (permission === "default") {
            console.log("Default");
        }
    });
}

const VAPID_PUBLIC_KEY = "BAcgnkauwyqPz1MI31KN9sN8wpIPEMkfhbmEijXcodAUzCoy1u5tIePU7HpATIv2VQOFN45Mu4Wc1qx-6HRxv_g";

function registerPush() {
    let subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    };

    navigator.serviceWorker.ready.then(reg => {
        return reg.pushManager.subscribe(subscribeOptions);
    }).then(sub => {
        console.log(JSON.stringify(sub));
        let json =JSON.parse(JSON.stringify(sub));
        console.log(json.endpoint);
        console.log(json.keys.auth);
        console.log(json.keys.p256dh);
        return sub;
    });
}
function sendSubscriptionToBackEnd(sub) {
    return fetch('/api/save-subscription/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sub)
    })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Bad status code from server.');
            }

            return response.json();
        })
        .then(function(responseData) {
            if (!(responseData.data && responseData.data.success)) {
                throw new Error('Bad response from server.');
            }
        });
}

function urlBase64ToUint8Array(base64String){
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}