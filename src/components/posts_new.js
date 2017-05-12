import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Tags"
            name="tags"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

//This helper function will be called automatically by the reduxForm function
//below at various points during the lifecycle. Because the key/value pair is
//the same, we just need to include the name, as done below.
function validate(values) {
  const errors = {};

  //Validate the inputs of 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter the categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  //If errors is empty, the form is fine to submit. If errors has *any*
  //properties, redux-form assumes the form is invalid.
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
