import "../popup/styles.css"

const startReminderButton = document.getElementById("startReminder") as HTMLButtonElement;
const pauseReminderButton = document.getElementById("pauseReminder") as HTMLButtonElement;
// const status = document.getElementById("status") as HTMLSpanElement;
const inputInterval = document.getElementById("interval") as HTMLInputElement;

startReminderButton.onclick = () => {
    console.log("startReminderButton")
    // chrome.runtime.sendMessage({ action: "startReminder" })
}
console.log(pauseReminderButton)
pauseReminderButton.onclick = async () => {
    console.log("pauseReminderButton")
    const test = await chrome.runtime.sendMessage({ action: "pauseReminder" })
    console.log(test)
}

inputInterval.addEventListener("focusout", async () => {
    const message = await chrome.runtime.sendMessage({ action: "setInterval", interval: inputInterval.value })
    console.log(message)
})
