import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energyType: 'stamina';
  private static rangerGetEnergy = 0;

  constructor(
    name: string,    
  ) {
    super(name);
    this.energyType = 'stamina';
    Ranger.incrementRanger();
  }

  static incrementRanger(): void {
    this.rangerGetEnergy += 1;
  }

  static createdArchetypeInstances(): number {
    return this.rangerGetEnergy;
  }
}