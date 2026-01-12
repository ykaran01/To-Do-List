let task = document.querySelector(".in")
let add = document.querySelector(".add")
let comp = document.querySelector(".comp")
let uncomp = document.querySelector(".uncomp")
let a = 0;
let b = 0;
function main() {
    add.addEventListener("click", () => {
        if (task.value.trim() !== "") {
            console.log(task.value);

            document.querySelector("ul").innerHTML = document.querySelector("ul").innerHTML + ` <li>
                <div class="checkbox">
                    <input type="checkbox" name="check" id="check" class="check" >
                    <p class="">${task.value}</p>
                </div>
                <div class="buttons">
                    <button class="Delete">Delete</button>
                    
                </div>
            </li>`
            ++a;
            updatecomplete()
            task.value = ""
        }
    })
    document.querySelector("ul").addEventListener("click", (e) => {
        if (e.target.classList.contains("Delete")) {
            e.target.closest("li").remove();
            a--;
            updatecomplete()
            b--;
            completed()
        }
    });
    document.querySelector("ul").addEventListener("click", (e) => {
        if (e.target.classList.contains("check")) {
            if (e.target.checked) {
                e.target.closest("li").querySelector("p").style.textDecoration = "line-through"
                b++;
                completed()
                a--;
                updatecomplete()
            }
            else {
                e.target.closest("li").querySelector("p").style.textDecoration = "none"
                b--; completed()
                a++;
                updatecomplete()
            }
        }
    });
}
main()

function updatecomplete() {
    if (a < 0) { uncomp.textContent = "0" }
    else uncomp.textContent = `${a}`
}
function completed() {
    if (b < 0) { comp.textContent = "0" }
    else comp.textContent = `${b}`
}
