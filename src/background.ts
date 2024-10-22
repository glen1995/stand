import * as timer from './scripts/handleTime';

console.log("Service worker is running")
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === "pauseReminder") {
        console.log("Service worker received message from sender %s", sender.id, request)
        const time = await timer.getRecursiveTime()
        sendResponse({ time })
    }
    if (request.action === "setInterval") {
        try {
            await timer.setRecursiveTime(request.interval)
            sendResponse({ response: true })
        } catch (error) {
            console.log(error)
            sendResponse({ response: false })
        }
    }
})