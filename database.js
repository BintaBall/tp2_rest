const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données :", err.message);
    } else {
        console.log("✅ Connecté à la base de données SQLite.");

        // Création de la table si elle n'existe pas
        db.run(`CREATE TABLE IF NOT EXISTS personnes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            adresse TEXT
        )`, (err) => {
            if (err) {
                console.error("Erreur lors de la création de la table :", err.message);
            } else {
                console.log("✅ Table 'personnes' vérifiée/créée.");

                // Vérification et insertion de données initiales
                db.get("SELECT COUNT(*) AS count FROM personnes", (err, row) => {
                    if (err) {
                        console.error("Erreur lors de la vérification des données :", err.message);
                    } else if (row.count === 0) {
                        console.log("📌 Insertion des données initiales...");
                        const personnes = [
                            { nom: "Bob", adresse: "10 Rue de Paris" },
                            { nom: "Alice", adresse: "5 Avenue des Champs" },
                            { nom: "Charlie", adresse: "42 Boulevard Saint-Michel" }
                        ];

                        personnes.forEach(({ nom, adresse }) => {
                            db.run(`INSERT INTO personnes (nom, adresse) VALUES (?, ?)`, [nom, adresse], (err) => {
                                if (err) {
                                    console.error("Erreur lors de l'insertion :", err.message);
                                } else {
                                    console.log(`✅ ${nom} ajouté(e) avec succès.`);
                                }
                            });
                        });
                    } else {
                        console.log("📌 Les données existent déjà, aucune insertion nécessaire.");
                    }
                });
            }
        });
    }
});

module.exports = db;
