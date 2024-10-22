// Usage: import { localStorage } from './storage/storage';

export type TimerConfig = {
    time: number;
}

export function getStorageData(): Promise<TimerConfig> {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(null, (result) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }

            return resolve(result as TimerConfig);
        });
    });
}

export function setStorageData(data: TimerConfig): Promise<void> {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.set(data, () => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }

            return resolve();
        });
    });
}