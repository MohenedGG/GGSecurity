export class DateUtils {
    // Get current date in YYYY/MM/DD or other format
    public static today(separator: string = "/"): string {
        const date = new Date();

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}${separator}${month}${separator}${day}`;
    }

    // Get current time in HH:MM:SS or other format
    public static nowTime(separator: string = ":"): string {
        const date = new Date();

        const hours = `${date.getHours() < 12 ? "AM" : "PM"} ${String(
            date.getHours() % 12 || 12
        ).padStart(2, "0")}`;
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `${hours}${separator}${minutes}${separator}${seconds}`;
    };
}
