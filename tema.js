const tombolTema = document.querySelector("#tombolTema");

if (tombolTema) {
    const temaTersimpan = localStorage.getItem("tema");
    const temaAwal = temaTersimpan
        ? temaTersimpan === "gelap"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;

    function aturTema(modeGelap) {
        document.body.classList.toggle("dark-mode", modeGelap);
        tombolTema.textContent = modeGelap ? "☀️ Mode Terang" : "🌙 Mode Gelap";
        tombolTema.setAttribute("aria-pressed", String(modeGelap));
    }

    aturTema(temaAwal);

    tombolTema.addEventListener("click", () => {
        const modeGelap = !document.body.classList.contains("dark-mode");
        aturTema(modeGelap);
        localStorage.setItem("tema", modeGelap ? "gelap" : "terang");
    });
}