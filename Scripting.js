function ToggleHide()
{
    let p = document.getElementById("qwe")
    let w = document.getElementById("btn")
    if(p.style.display=="none")
    {
        p.style.display = "block";
        w.innerHTML = "SHOW LESS";
    }
    else
    {
        p.style.display = "none"
        w.innerHTML = "VIEW OUR DETAILS";
    }
}
function Messa()
{
    let a = confirm("Do you want to continue ?");
    if(a==true)
    {
        alert("Your order is in making!\nand will delivered to you within 40 min");
        let b = document.getElementById('xc');
        let c = document.getElementById('i1');
        let d = document.getElementById('i2');
        let e = document.getElementById('i3');
        b.value = "";
        c.value = "";
        d.value = "";
        e.value = "";
    }
}