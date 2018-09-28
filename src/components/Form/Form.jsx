import React from 'react';
import styles from './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            verify: '',
            terms: false,
            successMessage: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({target}) {
        this.setState({[target.name]: target.value});
    }  
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
            verify: '',
            terms: false,
            successMessage: 'Thank you for registering'
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p className={styles.inputLabel}>Account Email</p>
                <input 
                    type="text" 
                    name='email' className={styles.inputField} value={this.state.email} 
                    onChange={this.handleChange} 
                />
                <p className={styles.inputLabel}>Password</p>
                <input 
                    type="password" 
                    name='password' 
                    className={styles.inputField} 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                />
                <p className={styles.inputLabel}>Verify Password</p>
                <input 
                    type="password" 
                    name='verify' 
                    className={styles.inputField} 
                    value={this.state.verify} 
                    onChange={this.handleChange} 
                />
                <p className={styles.inputLabel}>
                    <input 
                        type="checkbox" 
                        name="terms" 
                        className={styles.checkBox} 
                        value={this.state.terms} 
                    />
                    Terms and Conditions
                </p>
                <div className={styles.success}>                       {this.state.successMessage}
                </div>
                <input 
                    type="submit"
                    className={styles.buttonLarge} 
                    value="Sign In"
                />
            </form>
        );
    }
}

export default Form;
