// src/Archetypes/Archetype.ts

import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private name: string;
  private special: number;
  private cost: number;

  constructor(name: string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
  }

  public get Name(): string {
    return this.name;
  }

  public get Special(): number {
    return this.special;
  }

  public get Cost(): number {
    return this.cost;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}
