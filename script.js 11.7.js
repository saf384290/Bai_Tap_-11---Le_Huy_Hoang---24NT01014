/* =========================
24NT01014 - Lê Huy Hoàng - Bài 11
========================= */
const animals = [
{
ten: "Trâu",
anh: "img/buffalo/buffalo_1.jfif",
mota: "Trâu là bạn thân của nhà nông Việt Nam.",
thuvien: [
"img/buffalo/buffalo_1.jfif",
"img/buffalo/buffalo_2.jfif",
"img/buffalo/buffalo_3.jfif",
"img/buffalo/buffalo_4.jfif",
"img/buffalo/buffalo_5.jfif"
]
},
{
ten: "Bò",
anh: "img/cow/cow_1.jfif",
mota: "Bò là loài vật cung cấp sữa và thịt.",
thuvien: [
"img/cow/cow_1.jfif",
"img/cow/cow_2.jfif",
"img/cow/cow_3.jfif",
"img/cow/cow_4.jfif",
"img/cow/cow_5.jfif"
]
}
];
const animalList = document.getElementById("animalList");
animals.forEach(animal => {
const card = document.createElement("div");
card.className = "animal-card";
card.innerHTML = `
<img src="${animal.anh}">
<h3>${animal.ten}</h3>
`;
card.onclick = () => {
localStorage.setItem("selectedAnimal", JSON.stringify(animal));
window.location.href = "detail.html";
};
animalList.appendChild(card);
});

