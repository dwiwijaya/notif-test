self.addEventListener("notificationclick", function (event) {
    event.notification.close();

    if (event.action === "play") {
        clients.openWindow("/play");
    } else if (event.action === "dismiss") {
        console.log("Pengguna menutup notifikasi.");
    }
});
