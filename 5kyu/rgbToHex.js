function rgb(r, g, b) {
    // complete this function
    let rgb = [r, g, b]
    let hexResult = '';

    for (let i = 0; i < rgb.length; i++) {
        if (rgb[i] > 255) {
            rgb[i] = 255;
        } else if (rgb[i] < 0) {
            rgb[i] = 0;
        }

        let hexInd = rgb[i].toString(16);

        if (hexInd === "0") {
            hexResult += '00';
        } else if (hexInd.length === 1) {
            hexResult += `0${hexInd}`
        } else {
            hexResult += `${hexInd}`
        }
    }

    return hexResult.toUpperCase();
}