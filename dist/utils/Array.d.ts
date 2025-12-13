export default class ArrayUtils {
    static shuffle<T>(array: T[]): T[];
    static removeDuplicates<T>(array: T[]): T[];
    static getRandomElement<T>(array: T[]): T | undefined;
    static flatten<T>(array: T[][]): T[];
    static max(array: number[]): number | undefined;
    static min(array: number[]): number | undefined;
    static sum(array: number[]): number;
    static average(array: number[]): number | undefined;
}
