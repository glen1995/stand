export type TimerConfig = {
    time: number;
}

export class Configs {
    timerConfig: TimerConfig = { time: 15 };
}

export const localStorage = {
    get: (callback: (configs: TimerConfig) => void) => {
        chrome.storage.sync.get({ configs: new Configs() }, (storage) => {
            callback(storage.configs);
        });
    },
    set: (configs: Configs, callback?: () => void) => {
        chrome.storage.sync.set({ configs }, () => {
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