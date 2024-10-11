import { ClrLabel } from "@clr/angular";
import { title } from "process";

export const Campaigns = [
  {
    title: 'GOLDENVAULT',
    label: '골든 볼트',
    platform: 'roll20',
    npcs: [
      ],
    logs: [
    {
      index: '1',
      name: '골든 볼트: 별에 뻗은 손',
      images: [
      ],
      interfaces: [
      ],
    },
   ],
  },
];

export interface Campaign {
  title: string;
  label: string;
  platform: string;
  npcs: NPC[];
  logs: Log[];
}

export interface NPC {
  name: string;
  avatar: string;
}

export interface Log {
  index: string;
  name: string;
  images?: Image[];
  interfaces?: Image[];
}

export interface Image {
  id: string;
  file: string;
}
