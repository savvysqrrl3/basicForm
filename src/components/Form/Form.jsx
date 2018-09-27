import React from 'react';
import styles from './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        // make submit button turn green and clear input fields
        // prevent submit if text is empty
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p className={styles.inputLabel}>Account Email</p>
                <input type="text" name='email' className={styles.inputField} value={this.state.value} onChange={this.handleChange} />
                <p className={styles.inputLabel}>Password</p>
                <input type="text" name='password' className={styles.inputField} value={this.state.value} onChange={this.handleChange} />
                <p className={styles.inputLabel}>Verify Password</p>
                <input type="text" name='password-verify' className={styles.inputField} value={this.state.value} onChange={this.handleChange} />
                <p className={styles.inputLabel}>
                    <input type="checkbox" name="terms" className={styles.checkBox} checked="" />
                    Terms and Conditions
                </p>
                <input type="submit" className={styles.buttonLarge} value="Sign In" />
            </form>
        );
    }
}

export default Form;
