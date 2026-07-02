/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FragranceHouse {
  id: string;
  name: string;
  origin: string; // e.g. "Paris, France"
  description: string;
  philosophy: string;
  signatureNotes: string[];
  imageUrl: string;
  established: string;
}

export interface FeaturedPerfume {
  id: string;
  houseId: string;
  houseName: string;
  name: string;
  type: string; // e.g., "Eau de Parfum", "Extrait de Parfum"
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  character: string; // e.g., "Warm, Woody, Enigmatic"
  imageUrl: string;
}

export interface BrandPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  type: "discerning_customer" | "fragrance_house" | "general";
  message: string;
}
