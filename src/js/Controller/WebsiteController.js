import { ContactsOutlined, ThreeSixtySharp } from '@material-ui/icons';
import React from 'react';
import Website from '../View/Website';

class WebsiteController extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            login : false,
        }
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }
    componentDidMount(){}
    componentWillUnmount(){}

    onLogin(){
        this.setState({login:true});
    }

    onLogout(){
        this.setState({login:false});
    }

    getLoginStatus(){
        return this.state.login;
    }

    render(){
        return(
            <Website
                onLogin = {this.onLogin}
                onLogout = {this.onLogout}
                LoginStatus = {this.getLoginStatus()}
            />
        );
    }
}

export default WebsiteController