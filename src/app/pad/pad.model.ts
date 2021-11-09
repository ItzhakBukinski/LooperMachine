export class Pad {
    audio = new Audio();
    icon: string = ""
    name: string = ""
    on:boolean = false

    constructor(audioSource: string, iconSource: string, status: boolean) {
        this.audio.src = audioSource
        this.icon = iconSource
        this.name = audioSource
        this.audio.loop = true
        this.on = status
    }
}