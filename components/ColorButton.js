import React, {PureComponent} from 'react';

function withColor(ChangedColor){
    class colorButton extends Component{
        constructor(props){
            super(props);
            this.state = {
                color: 'white',
            };
        }
    
        render(){
            return(
                <div>
                    <button onClick={() => this.componentDidCatch()}>Click to change color</button>
                </div>
            );
        }
    }




}


export default colorButton;