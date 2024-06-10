const familyLink = document.querySelectorAll(".lingua-link");

const protoFamily1 = document.getElementById("proto-1-family");
const protoFamily2 = document.getElementById("proto-2-family");
const protoFamily3 = document.getElementById("proto-3-family");

protoFamily1.addEventListener('click', () => {
    window.location.href = `./proto-1-family.html`;
});

protoFamily2.addEventListener('click', () => {
    window.location.href = `./proto-2-family.html`;
});

protoFamily3.addEventListener('click', () => {
    window.location.href = `./proto-3-family.html`;
});