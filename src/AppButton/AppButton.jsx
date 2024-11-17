import style from './AppButton.module.css'


export default function AppButton({ln, onClick}) {
    return (
        <button onClick={onClick} className={style.btn}>
            {ln.title}
        </button>
    )
}