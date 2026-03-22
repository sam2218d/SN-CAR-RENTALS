export type CarType = 'sedan' | 'suv';
export type PackageType = 'local' | 'outstation' | 'pick-drop';
export type NightChargeType = 'none' | 'half' | 'full' | 'next-day';

export interface PricingData {
  packages: { hours: number; km: number; nonAc: number; ac: number }[];
  extraHour: { nonAc: number; ac: number };
  extraKmLocal: { nonAc: number; ac: number };
  outstationKm: { nonAc: number; ac: number };
}

export const PRICING: Record<CarType, PricingData> = {
  sedan: {
    packages: [
      { hours: 6, km: 60, nonAc: 1500, ac: 1700 },
      { hours: 8, km: 80, nonAc: 1650, ac: 1850 },
      { hours: 12, km: 120, nonAc: 2300, ac: 2550 },
      { hours: 16, km: 160, nonAc: 2850, ac: 3250 },
      { hours: 20, km: 200, nonAc: 3300, ac: 3600 },
    ],
    extraHour: { nonAc: 160, ac: 180 },
    extraKmLocal: { nonAc: 16, ac: 18 },
    outstationKm: { nonAc: 14, ac: 16 },
  },
  suv: {
    packages: [
      { hours: 8, km: 80, nonAc: 2000, ac: 2200 },
      { hours: 12, km: 120, nonAc: 2650, ac: 2950 },
      { hours: 16, km: 160, nonAc: 3450, ac: 3750 },
      { hours: 20, km: 200, nonAc: 4000, ac: 4500 },
    ],
    extraHour: { nonAc: 200, ac: 220 },
    extraKmLocal: { nonAc: 20, ac: 22 },
    outstationKm: { nonAc: 16, ac: 18 },
  }
};

export const NIGHT_CHARGES: Record<NightChargeType, number> = {
  'none': 0,
  'half': 250,
  'full': 500,
  'next-day': 1000
};

export const PICK_DROP_RATES = [
  { id: 'hwh', name: 'HWH Station', nonAc: 1100, ac: 1200, icon: 'train' },
  { id: 'airport', name: 'Airport', nonAc: 1300, ac: 1400, icon: 'flight', isPopular: true },
  { id: 'shalimar', name: 'Shalimar & Satragachi', nonAc: 1350, ac: 1450, icon: 'train' },
  { id: 'sealdah', name: 'Sealdah', nonAc: 1400, ac: 1500, icon: 'train' }
];
