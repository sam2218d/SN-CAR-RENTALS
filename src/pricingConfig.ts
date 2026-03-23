export type CarType = 'sedan' | 'suv' | 'scorpio';
export type PackageType = 'local' | 'outstation' | 'pick-drop';
export type NightChargeType = 'none' | 'half' | 'full' | 'next-day';

export interface PricingData {
  packages: { hours: number; km: number; nonAc: number; ac: number; label?: string }[];
  extraHour: { nonAc: number; ac: number };
  extraKmLocal: { nonAc: number; ac: number };
  outstationKm: { nonAc: number; ac: number };
  bulkRateKm: { nonAc: number; ac: number; minKm: number };
}

export const CAR_TYPE_LABELS: Record<CarType, { name: string; subtitle: string; icon: string; seats: string }> = {
  sedan: { name: 'Sedan & Hatchback', subtitle: 'Dzire / Swift · 4 Seater', icon: 'directions_car', seats: '4' },
  suv: { name: 'SUV 7 Seater', subtitle: 'Ertiga', icon: 'airport_shuttle', seats: '7' },
  scorpio: { name: 'SUV Scorpio', subtitle: '8/9 Seater', icon: 'directions_car_filled', seats: '8/9' },
};

export const PRICING: Record<CarType, PricingData> = {
  sedan: {
    packages: [
      { hours: 6, km: 60, nonAc: 1400, ac: 1600 },
      { hours: 8, km: 80, nonAc: 1600, ac: 1800 },
      { hours: 12, km: 120, nonAc: 2300, ac: 2600 },
      { hours: 16, km: 160, nonAc: 2850, ac: 3250 },
      { hours: 0, km: 200, nonAc: 3300, ac: 3800, label: 'Within 200 KM' },
    ],
    extraHour: { nonAc: 160, ac: 180 },
    extraKmLocal: { nonAc: 16, ac: 18 },
    outstationKm: { nonAc: 14, ac: 16 },
    bulkRateKm: { nonAc: 14, ac: 16, minKm: 300 },
  },
  suv: {
    packages: [
      { hours: 8, km: 80, nonAc: 2000, ac: 2200 },
      { hours: 12, km: 120, nonAc: 2800, ac: 3050 },
      { hours: 16, km: 160, nonAc: 3500, ac: 3900 },
      { hours: 0, km: 200, nonAc: 4400, ac: 4800, label: 'Same day return upto 200 KM' },
    ],
    extraHour: { nonAc: 200, ac: 220 },
    extraKmLocal: { nonAc: 20, ac: 22 },
    outstationKm: { nonAc: 18, ac: 20 },
    bulkRateKm: { nonAc: 20, ac: 22, minKm: 300 },
  },
  scorpio: {
    packages: [
      { hours: 8, km: 80, nonAc: 2200, ac: 2400 },
      { hours: 12, km: 120, nonAc: 3000, ac: 3300 },
      { hours: 16, km: 160, nonAc: 3800, ac: 4200 },
      { hours: 0, km: 200, nonAc: 4400, ac: 4800, label: 'Within 200 KM' },
    ],
    extraHour: { nonAc: 200, ac: 220 },
    extraKmLocal: { nonAc: 20, ac: 22 },
    outstationKm: { nonAc: 18, ac: 20 },
    bulkRateKm: { nonAc: 20, ac: 22, minKm: 300 },
  }
};

export const NIGHT_CHARGES_SEDAN = {
  half: { amount: 250, desc: 'Upto 1:55 AM' },
  full: { amount: 500, desc: 'After 2:00 AM upto 5 AM' },
  nextDay: { amount: 1000, desc: 'Upto next day 4:00 PM*' },
};

export const NIGHT_CHARGES_SUV = {
  half: { amount: 250, desc: 'Upto 1:30 AM' },
  full: { amount: 500, desc: 'Upto 5 AM' },
  nextDay: { amount: 1000, desc: 'Upto next day 6:00 PM*' },
};

export const NIGHT_CHARGES_SCORPIO = {
  half: { amount: 250, desc: 'Upto 1:30 AM' },
  full: { amount: 500, desc: 'Upto 5 AM' },
  nextDay: { amount: 1000, desc: 'Upto next day 6:00 PM*' },
};

export const NIGHT_CHARGES: Record<NightChargeType, number> = {
  'none': 0,
  'half': 250,
  'full': 500,
  'next-day': 1000
};

export const PICK_DROP_RATES_SEDAN = [
  { id: 'hwh', name: 'HWH Station', nonAc: 1200, ac: 1300, icon: 'train' },
  { id: 'airport', name: 'Airport', nonAc: 1300, ac: 1400, icon: 'flight', isPopular: true },
  { id: 'shalimar', name: 'Shalimar & Satragachi', nonAc: 1300, ac: 1400, icon: 'train' },
  { id: 'sealdah', name: 'Sealdah', nonAc: 1400, ac: 1500, icon: 'train' },
];

export const PICK_DROP_RATES_SUV = [
  { id: 'hwh', name: 'HWH Station', nonAc: 1600, ac: 1700, icon: 'train' },
  { id: 'airport', name: 'Airport', nonAc: 1600, ac: 1700, icon: 'flight', isPopular: true },
  { id: 'shalimar', name: 'Shalimar & Satragachi', nonAc: 1600, ac: 1700, icon: 'train' },
  { id: 'sealdah', name: 'Sealdah', nonAc: 1700, ac: 1800, icon: 'train' },
];

export const PICK_DROP_RATES_SCORPIO = [
  { id: 'hwh', name: 'HWH Station', nonAc: 1600, ac: 1700, icon: 'train' },
  { id: 'airport', name: 'Airport', nonAc: 1600, ac: 1700, icon: 'flight', isPopular: true },
  { id: 'shalimar', name: 'Shalimar & Satragachi', nonAc: 1600, ac: 1700, icon: 'train' },
  { id: 'sealdah', name: 'Sealdah', nonAc: 1700, ac: 1800, icon: 'train' },
];

// Legacy export for backward compatibility with CalculatePage
export const PICK_DROP_RATES = PICK_DROP_RATES_SEDAN;
