import s from "./ContactSupport.module.css";
import { ContactSupportProps } from "../../interface/props";

function ContactSupport({ title, text, email, phoneNumber }: ContactSupportProps) {
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={s.section__package}>
        <div>
          <img src="" alt="image" />
          <p>Customer service support</p>
        </div>
        <div>
          <img src="" alt="image" />
          <p>Technical support</p>
        </div>
        <div>
          <p>please contact us at</p>
          <span>{email}</span>
        </div>
      </div>
      <div className={s.section__package}>
        <div>
          <img src="" alt="image" />
          <p>Customer service support</p>
        </div>
        <div>
          <img src="" alt="image" />
          <p>Technical support</p>
        </div>
        <div>
          <p>please contact us at</p>
          <span>{email}</span>
        </div>
      </div>
    </section>
  );
}
export default ContactSupport;
