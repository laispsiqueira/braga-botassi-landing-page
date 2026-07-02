/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FragranceHouse, FeaturedPerfume, BrandPillar } from "./types";

export const BRAND_PILLARS: BrandPillar[] = [
  {
    title: "Thoughtful Selection",
    subtitle: "A Curated Portfolio",
    description: "We scour the globe to identify fragrance houses that possess a unique olfactory signature, uncompromising raw materials, and an authentic story to tell."
  },
  {
    title: "Elevated Retail Experiences",
    subtitle: "Immersive Spaces",
    description: "Creating poetic environments where fragrance is treated as art, inviting Brazilian scent enthusiasts into an intimate discovery of haute perfumery."
  },
  {
    title: "Long-Term Partnerships",
    subtitle: "Sustainable Growth",
    description: "We build enduring, strategic alliances with international houses, nurturing their heritage and translating their stories with nuance for the Brazilian market."
  }
];

export const FRAGRANCE_HOUSES: FragranceHouse[] = [
  {
    id: "maison-eternite",
    name: "Maison d'Éternité",
    origin: "Paris, France",
    description: "Deeply rooted in the classic French traditions of Grasse and Paris, Maison d'Éternité specializes in capturing fleeting memories in absolute extracts of Orris, Iris, and Damask Rose.",
    philosophy: "To create perfumes that act as slow-motion portals to forgotten places and eternal summers.",
    signatureNotes: ["Orris Butter", "Florentine Iris", "White Musk", "Damask Rose"],
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
    established: "1924"
  },
  {
    id: "santal-solis",
    name: "Santal & Solis",
    origin: "Grasse, France",
    description: "An avant-garde house born in the sun-drenched terraces of Southern France. Santal & Solis balances heavy, warm sacred woods with luminous, solar aldehydes and sparkling citrus.",
    philosophy: "Forging a bridge between the deep shadows of ancient forests and the blinding light of the Mediterranean sun.",
    signatureNotes: ["Mysore Sandalwood", "Golden Saffron", "Bergamot", "Ambrette Seeds"],
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    established: "2011"
  },
  {
    id: "nordic-resin",
    name: "Nordic Resin",
    origin: "Oslo, Norway",
    description: "Inspired by the raw, dramatic sub-zero landscapes of Scandinavia, Nordic Resin crafts minimalist, mineral-forward fragrances using cold pine, silver birch, and sea salt.",
    philosophy: "A celebration of crisp air, silence, and the resilience of northern flora.",
    signatureNotes: ["Siberian Pine", "Silver Birch Resin", "Arctic Sea Salt", "Crushed Amber"],
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    established: "2018"
  },
  {
    id: "al-kimiya",
    name: "Al-Kimiya",
    origin: "Muscat, Oman",
    description: "Blending ancient Middle Eastern traditions of incense alchemy with contemporary European structure. Al-Kimiya is renowned for its intense, dark extraits of Frankincense, Oud, and warm spice.",
    philosophy: "The transmutation of raw earth and rare resins into liquid gold for the soul.",
    signatureNotes: ["Silver Frankincense", "Cambodian Oud", "Black Pepper", "Madagascar Vanilla"],
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    established: "2007"
  }
];

export const FEATURED_PERFUMES: FeaturedPerfume[] = [
  {
    id: "orris-absolu",
    houseId: "maison-eternite",
    houseName: "Maison d'Éternité",
    name: "Orris Absolu",
    type: "Extrait de Parfum",
    description: "A velvety, powdery masterpiece centering the precious Tuscan Iris root, aged for five years before extraction. Soft, nostalgic, and deeply intimate.",
    notes: {
      top: ["Italian Mandarin", "Angelica Seed"],
      heart: ["Tuscan Iris Concrete", "Violet Leaf"],
      base: ["Suede Accord", "Florentine Cedarwood", "White Musk"]
    },
    character: "Powdery, Velvety, Intimate",
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "helios-santal",
    houseId: "santal-solis",
    houseName: "Santal & Solis",
    name: "Hélios Santal",
    type: "Eau de Parfum",
    description: "A shimmering blend of warm Mysore sandalwood illuminated by bright Mediterranean citrus and the golden spice of saffron.",
    notes: {
      top: ["Calabrian Bergamot", "Pink Pepper"],
      heart: ["Mysore Sandalwood", "Cardamom", "Jasmine Buds"],
      base: ["Ambergris", "Virginia Cedar", "Olibanum"]
    },
    character: "Solar, Warm, Luminous",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fjord-silence",
    houseId: "nordic-resin",
    houseName: "Nordic Resin",
    name: "Fjord Silence",
    type: "Eau de Parfum",
    description: "The crisp scent of snow-covered pine needles and glacial run-off, warmed by a base of petrichor and ancient fossilized resins.",
    notes: {
      top: ["Frosty Air", "Crushed Juniper Berries"],
      heart: ["Siberian Pine Needle", "Silver Birch Sap"],
      base: ["Mineral Musk", "Fossilized Amber", "Wet Stones"]
    },
    character: "Crisp, Mineral, Revitalizing",
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "oud-sacred",
    houseId: "al-kimiya",
    houseName: "Al-Kimiya",
    name: "Oud Sacré",
    type: "Extrait de Parfum",
    description: "A ceremonial fragrance of rare, dark Cambodian oud, floating over a warm, spicy cloud of Frankincense, patchouli, and rich leather.",
    notes: {
      top: ["Black Pepper", "Saffron Threads"],
      heart: ["Cambodian Oud", "Turkish Rose", "Siberian Fir"],
      base: ["Oman Frankincense", "Dark Patchouli", "Castoreum Accord"]
    },
    character: "Incense, Woody, Enigmatic",
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600"
  }
];
