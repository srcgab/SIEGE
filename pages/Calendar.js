import cx from 'classnames';
import styles from '../styles/Home.module.css';
import addEventCalendar from '../components/GoogleCalendario';

{/*Abre página para cadastro de evento no google calendar*/}
export default function abrePaginaCalendario(){

    return (
        <>
            <main className={cx(styles["form-signin"],"text-center","mt-5")}>
                <form>
                    <h1 className="h3 mb-3 fw-normal">Insira esse evento no Google Calendário:</h1>
                    <br/>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingEmail" name="floatingEmail" placeholder="nome@exemplo.com"/>
                        <label htmlFor="floatingData">Seu email</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <input type="date" className="form-control" id="floatingData" name="floatingData" placeholder="dd/mm/aaaa"/>
                        <label htmlFor="floatingData">Data</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <input type="time" className="form-control" id="floatingInicio" name="floatingInicio" placeholder="--:--" />
                        <label htmlFor="floatingInicio">Início</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <input type="time" className="form-control" id="floatingFinal" name="floatingFinal" placeholder="--:--" />
                        <label htmlFor="floatingFinal">Fim</label>
                    </div>
                    <br/>
                    <button onClick={addEventCalendar} className={cx(styles["bg-pink"],"w-100 btn btn-lg btn-primary bg-pink")} type="submit">Adicionar Evento</button>
                </form>
            </main>
        </>
    )
}
