function refresh() {
    let textContent = document.getElementById('editor').value;
    console.log(textContent)
    document.getElementById('viewer').srcdoc = textContent;
}