let insert = document.querySelector("#insert");

window.addEventListener("keypress", (e) => {
    
    insert.innerHTML = `    <div class="key">
                                ${e.key}
                                <small>event.key</small>
                            </div>
                            <div class="key">
                                ${e.keyCode}
                                <small>event.keyCode</small>
                            </div>
                            <div class="key">
                                ${e.code}
                                <small>event.code</small>
                            </div>`;
    // console.log(keySmall);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.code);
})