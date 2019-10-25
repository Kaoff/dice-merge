export enum EDiceAnimation {
    Spawn = 'bounceInDown',
    Merge = 'rubberBand',
    Hold = 'pulse',
    None = '',
}

export interface IDice {
    multiplier: 1 | 2 | 4 | 8 | 16 | 32 | 64;
    currentValue: number;
    animation: EDiceAnimation;
}