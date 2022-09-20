const inches = document.getElementById("inches") as HTMLInputElement
const centim = document.getElementById("centimeter") as HTMLInputElement
inches.addEventListener("input", e =>  {
    centim.value = (inches.value as unknown as number * 2.54) as unknown as string
})

