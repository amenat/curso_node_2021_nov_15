
const msg = document.createElement("div");
msg.classList.add("mensaje");
document.body.appendChild(msg);


fetch("/user")
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        const { firstname } = res;
        msg.innerHTML = `Hola ${firstname}`;
    });

