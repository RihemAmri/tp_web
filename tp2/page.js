//Étape 2
let tasks = [];
console.log("Bienvenue  !");
//Étape 3
function ajouterTache() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text !== "") {
    tasks.push({ texte: text, terminee: false });
    input.value = "";
    afficherTaches();
  }
}
//Étape 4
document.getElementById("addBtn").addEventListener("click", ajouterTache);

document
  .getElementById("searchInput")
  .addEventListener("input", afficherTaches);

document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    ajouterTache();
  }
});
//Étape 5
function afficherTaches() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((tache, index) => {
    const li = document.createElement("li");
    li.textContent = tache.texte;
    if (tache.terminee) {
      li.classList.add("completed");
    }

    const btnTerminer = document.createElement("button");
    btnTerminer.textContent = "✓";
    btnTerminer.onclick = () => terminerTache(index);

    const btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "X";
    btnSupprimer.onclick = () => supprimerTache(index);

    li.appendChild(btnTerminer);
    li.appendChild(btnSupprimer);
    list.appendChild(li);
  });
}
//Étape 6,7,8
function supprimerTache(index) {
  tasks.splice(index, 1);
  sauvegarder();
  afficherTaches();
}

function terminerTache(index) {
  tasks[index].terminee = !tasks[index].terminee;
  sauvegarder();
  afficherTaches();
}
//Étape 9
function sauvegarder() {
  localStorage.setItem("taches", JSON.stringify(tasks));
}

function charger() {
  const data = localStorage.getItem("taches");
  if (data) {
    tasks = JSON.parse(data);
    afficherTaches();
  }
}
charger();
//Étape 10
function mettreAJourCompteur() {
  const total = tasks.length;
  const terminees = tasks.filter((t) => t.terminee).length;
  document.getElementById(
    "compteur"
  ).textContent = `Tâches : ${terminees}/${total} terminées`;
}

function toutSupprimer() {
  tasks = [];
  sauvegarder();
  afficherTaches();
}

function afficherTaches() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  const searchText = document.getElementById("searchInput").value;

  tasks
    .filter((tache) => tache.texte.includes(searchText))
    .forEach((tache, index) => {
      const li = document.createElement("li");
      li.textContent = tache.texte;
      if (tache.terminee) li.classList.add("completed");

      const btnTerminer = document.createElement("button");
      btnTerminer.textContent = "✓";
      btnTerminer.onclick = () => terminerTache(index);

      const btnSupprimer = document.createElement("button");
      btnSupprimer.textContent = "X";
      btnSupprimer.onclick = () => supprimerTache(index);

      li.appendChild(btnTerminer);
      li.appendChild(btnSupprimer);
      list.appendChild(li);
    });

  mettreAJourCompteur();
}
