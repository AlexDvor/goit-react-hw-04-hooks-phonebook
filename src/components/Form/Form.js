// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from "uuid";
import { Component } from "react";
import ButtonItem from "../Button";
import PropTypes from "prop-types";
// style
import { FormItem, Input } from "./Form.styled.jsx";

class Form extends Component {
  state = {
    name: "",
    id: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const randomId = uuidv4().slice(0, 5);
    this.setState({
      [name]: value,
      id: randomId,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { getData } = this.props;
    const contactData = this.state;
    getData(contactData);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      id: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <div>
          <FormItem onSubmit={this.handleSubmit}>
            <Input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              placeholder="Name"
            />
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              placeholder="Phone number"
            />
            <ButtonItem text="Add contact" />
          </FormItem>
        </div>
      </>
    );
  }
}

export default Form;

Form.propTypes = {
  handleChange: PropTypes.func,
  getData: PropTypes.func,
  handleSubmit: PropTypes.func,
  resetForm: PropTypes.func,
};
