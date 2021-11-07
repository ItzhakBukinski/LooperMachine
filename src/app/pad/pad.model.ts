export class Pad {
    audio = new Audio();
    image = new Image()
    name: string = ""
    on = false
    constructor(audioSource: string, imageSource: string, status: boolean) {
        this.audio.src = audioSource
        this.image.src = imageSource
        this.name = audioSource
        this.audio.loop = true
        this.on = status
    }


}