const inches = document.getElementById("inches") as HTMLInputElement
const centim = document.getElementById("centimeter") as HTMLInputElement
type FnListener = (this: HTMLInputElement, e: Event) => void

function calculateCm(inche: number): number {
    return inche * 2.54
}

const convertToCm: FnListener = function (e) {
    if (this.value != "") {
        centim.value = (calculateCm(parseFloat(this.value))).toString()
    } else {
        centim.value = ""
    }
}

function calculateInche(cm: number): number {
    return cm / 2.54
}

const convertToInche: FnListener = function (e) {
    if (this.value != "") {
        inches.value = (calculateInche(parseFloat(this.value))).toString()
    } else {
        inches.value = ""
    }
}

inches.addEventListener("input", convertToCm)
centim.addEventListener("input", convertToInche)

