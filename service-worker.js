self.addEventListener("notificationclick", function (event) {
    if (event.action === "confirm") {
        console.log(`Pengguna melakukan ${event.notification.data.type}.`);
    } else if (event.action === "dismiss") {
        console.log(`Pengguna menunda ${event.notification.data.type}.`);
    }
    event.notification.close();
});
