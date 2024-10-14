import { localStorage, TimerConfig } from '../storage/storage';

export function setRecursiveTime(time: number): void {
    localStorage.set({ time } as TimerConfig);
    getRecursiveTime();
}


export function getRecursiveTime(): void {
    localStorage.get((configs: Record<string, string>) => { console.log("configs", configs) }, "time");
}