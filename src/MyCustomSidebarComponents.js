import * as React from "react";
// import * as Flex from '@twilio/flex-ui';
import axios from 'axios';
import { SideLink, SideLinkProps } from "@twilio/flex-ui";
import { Actions } from "@twilio/flex-ui";
// import { Actions as ViewActions } from "@twilio/flex-ui/state/ViewState";
import { Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';



const styles = {
  formStyle: {
    padding: 50
  },
  rowStyle: {
    color: 'purple',
    fontSize: '10px',
    marginBottom: "10px",
    marginLeft:"50px",

  }
};


export class MySidebarDashboardButton extends React.Component<Partial<SideLinkProps>, any> {

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

     handleClick() {

      Actions.invokeAction("NavigateToView", {viewName: "my-custom-page"});

       // ViewActions.navigateToView("my-custom-page");
    }

     render() {
        return <SideLink
            {...this.props}
            icon="Dashboard"
            iconActive="DashboardBold"
            isActive={this.props.activeView === "my-custom-page"}
            onClick={this.handleClick}>Email Customer</SideLink>
            ;
    }
}

export class MyCustomSidebarPage extends React.Component<any, any> {

    constructor(props, context) {
      super(props, context);

     // this.handleClick = this.handleClick.bind(this);
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    alert('Your Email Has Been Sent!')
      // send a POST request to my twilio function, which will then trigger an API request to mailgun to send the email
    axios({
      method:'post',
      params: {
        // from: 'mailgun@reemanaqvi.com',
        subject: event.target.elements.subject.value,
        text: event.target.elements.message.value,
        to: event.target.elements.emailaddress.value
      },
      url:'https://{{your-runtime-domain}}/sendmail', //use your Twilio runtime domain
    }).then(res => {
            console.log(res);
            console.log(res.data);
          })

  }

  render() {
    const { classes } = this.props;

    return (

        <form  style={styles.formStyle} onSubmit={this.handleSubmit}>
        <Row>
        <Col style={styles.rowStyle}>
        Recipient Email Address:         
        </Col>
        </Row>
        <Row>
        <Col  style={styles.rowStyle}>
        <input type="text" placeholder="To" name="emailaddress" size="80" /> 
        </Col>
        </Row>
        <Row>
        <Col  style={styles.rowStyle}>
        Email Subject:
        </Col>
        </Row>
        <Row>
        <Col  style={styles.rowStyle}>
        <input type="text" placeholder="Subject" name="subject" size="80" />
        </Col>
        </Row>
        <Row>
        <Col  style={styles.rowStyle}>
        Email Body:
        </Col>
        </Row>
        <Row>
        <Col  style={styles.rowStyle}>      
        <textarea type="text" name="message" placeholder="Message" rows="10" cols="78" />      
        </Col>
        </Row>
        <Row>
        <Col  style={styles.rowStyle}>
        <Button variant="raised" color="primary" size="large" type="submit">
          Send Email
        </Button>
        </Col>
        </Row>
      </form>
    );
  }
}


export class DialerButton extends React.Component<Partial<SideLinkProps>, any> {

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

     handleClick() {

    Actions.invokeAction("NavigateToView", {viewName: "dialer-page"});
       // ViewActions.navigateToView("dialer-page");

    }

     render() {
        return <SideLink
            {...this.props}
            icon="Dashboard"
            iconActive="DashboardBold"
            isActive={this.props.activeView === "dialer-page"}
            onClick={this.handleClick}>Outbound Dialer</SideLink>
            ;
    }
}

export class Dialer extends React.Component<any, any> {

    constructor(props, context) {
      super(props, context);

     // this.handleClick = this.handleClick.bind(this);
  }


  render() {
    const { classes } = this.props;

    return (

      <div>          
        <iframe 
           title="Outbound Dialer Example"
           src="https://browser-dialer-react.herokuapp.com/index" frameBorder="0"  //iframe an existing outbound dialer. Check more here: https://www.twilio.com/docs/voice/tutorials/browser-dialer-node-react 
           align="middle"
           width="500"
           height="650"
           allow="microphone"/>         
      </div>

    );
  }
}