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
// export const localStorage = {
//     get: (callback: (configs: Record<string, string>) => void, key: keyof TimerConfig) => {
//         chrome.storage.sync.get(key, (storage) => {
//             callback(storage);
//         });
//     },
//     set: (configs: TimerConfig, callback?: () => void) => {
//         chrome.storage.sync.set(configs, () => {
//             callback?.();
//         });
//     },
//     listen: (callback: (configs: TimerConfig) => void) => {
//         chrome.storage.onChanged.addListener((changes) => {
//             if (changes.configs) {
//                 callback(changes.configs.newValue);
//             }
//         });
//     },
// };