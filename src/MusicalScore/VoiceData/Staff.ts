export class Staff {
    constructor(parentInstrument: Instrument, instrumentStaffId: number) {
        this.parentInstrument = parentInstrument;
        this.id = instrumentStaffId;
        this.Audible = true;
        this.Following = true;
    }
    public IdInMusicSheet: number;
    public Audible: boolean;
    public Following: boolean;
    private parentInstrument: Instrument;
    private voices: List<Voice> = new List<Voice>();
    private volume: number = 1;
    private id: number;
    public get ParentInstrument(): Instrument {
        return this.parentInstrument;
    }
    public set ParentInstrument(value: Instrument) {
        this.parentInstrument = value;
    }
    public get Voices(): List<Voice> {
        return this.voices;
    }
    public get Id(): number {
        return this.id;
    }
    public get Volume(): number {
        return this.volume;
    }
    public set Volume(value: number) {
        this.volume = value;
    }
}