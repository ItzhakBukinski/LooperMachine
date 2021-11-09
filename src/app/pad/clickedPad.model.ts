export class ClickedPad {
    name: string = ""
    status: boolean = false

    constructor(name: string, status: boolean) {
        this.name = name
        this.status = status
    }
}