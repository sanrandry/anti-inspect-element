/**
 * @author san randry
 * @license MIT license
 * this plugin disable all inspect element feature on a web browser
 */
// disable right click
document.oncontextmenu = function (e) {
    e.preventDefault()
    return false;
}
// disable somme additional key
document.onkeydown = function (e) {
    // disable f12
    if (event.keyCode == 123) {
        return false;
    }
    // disable ctrl+shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // disable ctrl+shift+C
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    // disable ctrl+shift+j
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // disable ctrl+shift+U
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}