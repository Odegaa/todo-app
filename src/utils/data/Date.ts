const month = new Date().toLocaleString("eng", { month: "short" });
const year = new Date().getFullYear();
const day = new Date().getDate();

export const todayDate = `${year}, ${month} ${day}`;
export const dateFormat = "YYYY-MM-DD";
