import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

    render() {
        return (
            <div className="container">
                <Form></Form>
                <Message></Message>
            </div>
        );
    }
}

export default App;
