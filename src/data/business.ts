import type { BusinessHour } from "@/types";

export const business = {
  address:
    "Jl. Babarsari, Tambakbayan, Caturtunggal, Depok, Sleman, Daerah Istimewa Yogyakarta 55282",
  mapsUrl: "https://maps.app.goo.gl/Sio38vaemykBrmFp9",
  hours: [
    { days: "Senin–Kamis", hours: "09.00–00.00" },
    { days: "Jumat–Minggu", hours: "16.00–00.00" },
  ] satisfies BusinessHour[],
};
