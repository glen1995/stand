
import { describe, it, expect } from 'vitest'
import { getRecursiveTime, setRecursiveTime } from '../scripts/handleTime';


describe("time handler function", () => {
    it("should save the time in the web storage API", () => {
        setRecursiveTime(30);
        const a = getRecursiveTime();
        expect(a).toBe(1);
    });
});
