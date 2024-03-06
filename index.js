function max3(a, b, c) {
    if (a>=b && a>=c) {
        return a
    } else if (b>=a && b>=c) {
        return b
    } else {
        return c
    }
}

// Testování funkce
const vysledek = max3(10, 5, 8);
document.body.innerHTML = "<p>Maximální číslo z 10, 5 a 8 je </p>" + vysledek
