const TextIn = document.getElementById("TextIn");
const malumot = document.getElementById("malumot");
const url = "https://cbu.uz/uz/arkhiv-kursov-valyut/json/";

async function Jadval() {
  
    malumot.innerHTML = "";
    const javob = await fetch(url);
    const data = await javob.json();
    const valyuta = TextIn.value.toUpperCase().trim();

    const filter_V = valyuta ? 
        data.filter(obj => obj.Ccy === valyuta): 
        data;
    
    if (filter_V.length === 0) {
        malumot.textContent="Ma`lumot topilmadi"
        return;
    }
    
    filter_V.forEach(j => {
        const jadval = document.createElement("tr");
        jadval.innerHTML = `
            <td>${j.Ccy}</td>
            <td>${j.CcyNm_UZ}</td>
            <td>${j.Nominal}</td>
            <td>${j.Rate}</td>
            <td>${j.Diff}</td>
            <td>${j.Date}</td>
        `;
        malumot.appendChild(jadval);
    });
}
Jadval();


TextIn.addEventListener("input", Jadval);


