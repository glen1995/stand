import { getStorageData, setStorageData } from '../storage/storage';

export async function setRecursiveTime(time: number) {
    return await setStorageData({ time });
}


export async function getRecursiveTime() {
    return await getStorageData();
}