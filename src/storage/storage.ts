// Usage: import { localStorage } from './storage/storage';

export type TimerConfig = {
    time: number;
}


export const localStorage = {
    get: (callback: (configs: Record<string, string>) => void, key: keyof TimerConfig) => {
        chrome.storage.sync.get(key, (storage) => {
            callback(storage);
        });
    },
    set: (configs: TimerConfig, callback?: () => void) => {
        chrome.storage.sync.set(configs, () => {
            callback?.();
        });
    },
    listen: (callback: (configs: TimerConfig) => void) => {
        chrome.storage.onChanged.addListener((changes) => {
            if (changes.configs) {
                callback(changes.configs.newValue);
            }
        });
    },
};