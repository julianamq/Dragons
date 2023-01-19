import Archetype from './Archetype';

export default class Warrior extends Archetype {
  energyType: 'stamina';
  private static warriorGetEnergy = 0;

  constructor(
    name: string,    
  ) {
    super(name);
    this.energyType = 'stamina';
    Warrior.incrementWarrior();
  }

  static incrementWarrior(): void {
    this.warriorGetEnergy += 1;
  }

  static createdArchetypeInstances(): number {
    return this.warriorGetEnergy;
  }
}