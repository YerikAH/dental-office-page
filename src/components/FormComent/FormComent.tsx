import {FormCommentProps} from '../../interface/props'
import CustomInput from '../CustomInput/CustomInput'

function FormComment({inputs, title, text}: FormCommentProps){
  return <div>
    <h3>{title}</h3>
    <p>{text}</p>
    <form>
      {inputs.map(item => (
        <CustomInput
          label={item.label}
          name={item.name}
          placeholder={item.placeholder}
          type={item.type}
          withIcon={item.withIcon}
          multiline={item.multiline}
          isRequired={item.isRequired}
        />
      ))}
    </form>
  </div>
}
export default FormComment