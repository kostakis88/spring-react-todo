import React, { Component } from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from '../api/TodoDataService';
import Authentication from './Authentication';

class Todo extends Component {
  
  state = {
    id: this.props.match.params.id,
    description: '',
    targetDate: moment(new Date()).format('YYYY-MM-DD')
  }

  componentDidMount() {
    let username = Authentication.getLoggedInUsername();
    const {id} = this.state;
    TodoDataService.retrieveTodo(username, id)
      .then(response => {
        this.setState({
          description: response.data.description,
          targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
        });
      })
  }

  handleSubmit = (values) => {
    let username = Authentication.getLoggedInUsername();
    const {id} = this.state;
    TodoDataService.updateTodo(username, id, {
      id: id,
      description: values.description,
      targetDate: values.targetDate
    }).then(() => this.props.history.push('/todos'));
  }

  handleValidation = (values) => {
    let errors = {};

    if (!values.description) {
      errors.description = "Enter a Description";
    } else if (values.description.length < 5) {
      errors.description = "Enter atleast 5 Characters in Description";
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a valid date";
    }

    return errors;
  }

  render() {
    const {description, targetDate} = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik initialValues={{description, targetDate}} 
                  onSubmit={this.handleSubmit}
                  validateOnChange={false}
                  validateOnBlur={false}
                  validate={this.handleValidation}
                  enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field className="form-control" type="text" name="description"/>
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field className="form-control" type="date" name="targetDate"/>
                </fieldset>
                <button className="btn btn-success" type="submit">Save</button>
              </Form>
              )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Todo;