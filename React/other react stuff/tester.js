import React from "react"


class App extends React.Component {
    
    yourMethodHere() {
       return alert("imhere") 
    }
    
    render(props) {
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}
