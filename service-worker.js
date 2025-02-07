self.addEventListener("notificationclick", function (event) {
    event.notification.close();

    event.waitUntil(
        clients.matchAll({ type: "window", includeUncontrolled: true }).then(clientList => {
            if (event.action === "play") {
                if (clientList.length > 0) {
                    clientList[0].focus();
                    clientList[0].navigate("/play");
                } else {
                    clients.openWindow("/play");
                }
            } else {
                console.log("Pengguna menutup notifikasi.");
            }
        })
    );
});
