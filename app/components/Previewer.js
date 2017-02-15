/**
 * Created by jony on 2/15/17.
 */

import React from 'react';
import Marked from 'marked';

class Previewer extends React.Component{
    render(){
        let output = Marked(this.props.markdown);

        return <div dangerouslySetInnerHTML={{__html: output }}></div>;
    }
}

export default Previewer;