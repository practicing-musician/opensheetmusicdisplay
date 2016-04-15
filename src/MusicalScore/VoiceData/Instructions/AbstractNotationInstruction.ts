export class AbstractNotationInstruction {
    constructor() {
    }
    constructor(parent: SourceStaffEntry) {
        this.parent = parent;
    }
    protected parent: SourceStaffEntry;
    public get Parent(): SourceStaffEntry {
        return this.parent;
    }
    public set Parent(value: SourceStaffEntry) {
        this.parent = value;
    }
}
