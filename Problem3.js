function checkEmailId(str) {
    let lowerStr = str.toLowerCase();
    let atPos = lowerStr.indexOf('@');
    let dotPos = lowerStr.indexOf('.');

    if (atPos >= 0 && dotPos >= 0 && atPos < dotPos) {
        let gap = dotPos - atPos - 1;
        return gap > 0;
    }

    return false;
}
