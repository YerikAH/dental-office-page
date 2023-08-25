import s from "./Register.module.css";

function Register() {
  return (
    <div className={s.modal}>
      <div className={s.modal__center}>
        <b>Logo</b>
        <h2>Crea una nueva cuenta</h2>
        <form>
          <div>
            <label>Nombre completo</label>
            <input type="text" />
          </div>
          <div>
            <label>Correo electronico</label>
            <input type="text" />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="text" />
          </div>
          <input type="submit" />
        </form>
        <div className={s.separator}>
          <div></div>
          <p>o</p>
          <div></div>
        </div>
        <button className={s.option}>
          <img src="./google.svg" alt="google" />
          Continuar con Google
        </button>

        <div className={s.links}>
          <a href="" className={s.link}>
            <span>¿Ya tienes una cuenta?</span>
            <span>Inicia sesión</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Register;
