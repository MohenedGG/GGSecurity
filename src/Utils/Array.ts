export default class ArrayUtils {
    // Randomly rearranging the array elements
    public static shuffle<T>(array: T[]): T[] {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Remove duplicate elements from the array
    public static removeDuplicates<T>(array: T[]): T[] {
        return [...new Set(array)];
    }

    // Get a random element from the array
    public static getRandomElement<T>(array: T[]): T | undefined {
        if (array.length === 0) return undefined;
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }

    // Flatten a nested array
    public static flatten<T>(array: T[][]): T[] {
        return array.reduce((acc, val) => acc.concat(val), []);
    }

    // Get the maximum value in a numeric array
    public static max(array: number[]): number | undefined {
        if (array.length === 0) return undefined;
        return Math.max(...array);
    }

    // Get the minimum value in a numeric array
    public static min(array: number[]): number | undefined {
        if (array.length === 0) return undefined;
        return Math.min(...array);
    }

    // Calculate the sum of a numeric array
    public static sum(array: number[]): number {
        return array.reduce((acc, val) => acc + val, 0);
    }

    // Calculate the average of a numeric array
    public static average(array: number[]): number | undefined {
        if (array.length === 0) return undefined;
        const sum = this.sum(array);
        return sum / array.length;
    }
}
