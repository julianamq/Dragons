import Archetype from './Archetype';

export default class Mage extends Archetype {
  energyType: 'mana';
  private static MageGetEnergy
  = 0;

  constructor(
    name: string,    
  ) {
    super(name);
    this.energyType = 'mana';
    Mage.incrementMage();
  }

  static incrementMage(): void {
    this.MageGetEnergy
     += 1;
  }

  static createdArchetypeInstances(): number {
    return this.MageGetEnergy;
  }
}