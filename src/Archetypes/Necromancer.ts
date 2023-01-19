import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  energyType: 'mana';
  private static NecromancerGetEnergy
  = 0;

  constructor(
    name: string,    
  ) {
    super(name);
    this.energyType = 'mana';
    Necromancer.incrementNecromancer();
  }

  static incrementNecromancer(): void {
    this.NecromancerGetEnergy
     += 1;
  }

  static createdArchetypeInstances(): number {
    return this.NecromancerGetEnergy;
  }
}