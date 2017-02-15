/**
 * Created by jony on 2/10/17.
 */

import React from 'react';
import SampleMarkdown from './sample';
import Previewer from './Previewer';

class App extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            markdown: SampleMarkdown
        };
    }

    handleChange(event) {
        this.setState({
            markdown: event.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <textarea value={this.state.markdown} rows="20" cols="100" onChange={this.handleChange}/>
                    </div>

                    <div className="col-md-4">
                        <Previewer markdown={this.state.markdown}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;