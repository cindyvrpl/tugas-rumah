function kalkulator(angka1, operator, angka2) {
	if (typeof angka1 !== "number" || typeof angka2 !== "number") {
		throw new TypeError("Kedua nilai harus berupa angka.");
	}

	switch (operator) {
		case "+":
			return angka1 + angka2;
		case "-":
			return angka1 - angka2;
		case "*":
			return angka1 * angka2;
		case "/":
			if (angka2 === 0) {
				throw new RangeError("Tidak bisa membagi dengan nol.");
			}
			return angka1 / angka2;
		default:
			throw new Error("Operator tidak valid. Gunakan +, -, *, atau /.");
	}
}

console.log(`10 + 5 = ${kalkulator(10, "+", 5)}`);
console.log(`10 - 5 = ${kalkulator(10, "-", 5)}`);
console.log(`10 * 5 = ${kalkulator(10, "*", 5)}`);
console.log(`10 / 5 = ${kalkulator(10, "/", 5)}`);
function hitungNilai(event) {
	event.preventDefault();

	const tugas = document.getElementById("nilai-tugas").valueAsNumber;
	const uts = document.getElementById("nilai-uts").valueAsNumber;
	const uas = document.getElementById("nilai-uas").valueAsNumber;
	const hasil = document.getElementById("hasil");

	if (![tugas, uts, uas].every((nilai) => Number.isFinite(nilai) && nilai >= 0 && nilai <= 100)) {
		hasil.textContent = "Masukkan semua nilai dari 0 sampai 100.";
		return;
	}

	const rataRata = (tugas + uts + uas) / 3;
	hasil.textContent = `Nilai Akhir: ${rataRata.toFixed(2)}`;
}

const formNilai = document.querySelector(".kartu form");
if (formNilai) {
	const hasil = document.createElement("p");
	hasil.id = "hasil";
	hasil.setAttribute("aria-live", "polite");
	formNilai.insertAdjacentElement("afterend", hasil);
	formNilai.addEventListener("submit", hitungNilai);
}
