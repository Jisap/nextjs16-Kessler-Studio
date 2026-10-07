export interface ArchiveEntry {
  name: string;
  category: string;
}

export const archives: ArchiveEntry[] = [
  { name: "Low Frequency", category: "Sound Design" },
  { name: "Negative Space", category: "Motion Study" },
  { name: "Analog Drift", category: "Title Design" },
  { name: "Glass Chorus", category: "Experimental Audio" },
  { name: "Silent Frame", category: "Cinematography" },
  { name: "Afterimage", category: "Editorial Motion" },
  { name: "Echo Chamber", category: "Sound Design" },
  { name: "Cathode", category: "Visual Effects" },
  { name: "Slow Static", category: "Brand Strategy" },
  { name: "Parallel Cut", category: "Interaction Design" },
  { name: "Hidden Track", category: "Fashion Film" },
  { name: "Beneath the Noise", category: "Augmented Reality" },
];

export const previewImgs: string[] = Array.from(
  { length: 30 },
  (_, i) => `/images/archive/archive-${i + 1}.jpg`
);
