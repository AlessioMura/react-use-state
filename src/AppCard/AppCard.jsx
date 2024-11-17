/* import style from './AppCard.module.css' */

export default function AppCard({ln}) {
    if (!ln) {
        return (
            <div>
                Nessun linguaggio selezionato
            </div>
        )
    }

    return (
        <div>
            <h3>{ln.title}</h3>
            <p>{ln.description}</p>
        </div>
    )
}