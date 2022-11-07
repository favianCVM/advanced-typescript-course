interface LiveBeing {
  bornAt: Date;
  nonWantedProperty: string;
}

//OMIT
interface Animal extends Omit<LiveBeing, 'nonWantedProperty'> {
  name: string;
  readonly type: string;
}

//PICK
interface Animal extends Pick<LiveBeing, 'nonWantedProperty'> {
  name: string;
  readonly type: string;
}
