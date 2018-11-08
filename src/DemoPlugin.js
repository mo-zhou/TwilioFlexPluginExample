import { FlexPlugin } from 'flex-plugin';
import React from 'react';
// import CustomTaskListComponent from './CustomTaskListComponent';
import { Dialer, DialerButton, MyCustomSidebarPage, MySidebarDashboardButton  } from "./MyCustomSidebarComponents";


export default class DemoPlugin extends FlexPlugin {
  name = 'DemoPlugin';

  init(flex, manager) {

  	flex.CRMContainer.defaultProps.uriCallback = (task) => {

  		return task ? "https://na78.salesforce.com/_ui/search/ui/UnifiedSearchResults?str="+ task.attributes.name : "https://na78.salesforce.com/5001N00000c6UgD"
  	}

    // place your logo here
    // flex.MainHeader.defaultProps.logoUrl = "your logo url;
    // flex.TaskInfoPanel.Content.add(<MyCustomTaskInfoPanelItem key="send-QR-code-coupon"/>)

    flex.SideNav.Content.add(<MySidebarDashboardButton key="dashboard" />);
    flex.SideNav.Content.add(<DialerButton key="dashboard" />);
    // flex.CallCanvas.Content.add(<DialPad key="dialpad3"/>);
    flex.ViewCollection.Content.add(<flex.View key="dashboard" name="my-custom-page"><MyCustomSidebarPage /></flex.View>);
    flex.ViewCollection.Content.add(<flex.View key="dashboard" name="dialer-page"><Dialer /></flex.View>);
    flex.Actions.replaceAction("AcceptTask", (payload, original)=>{
    // console.log(payload.conferenceOptions);
    payload.conferenceOptions.endConferenceOnExit=true;
    return original(payload);
    });
/*
    flex.Actions.replaceAction("AcceptTask", (payload, original)=>{
    payload.conferenceOptions.record='true';
    return original(payload);
    });*/

/*    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskListComponent key="demo-component" />, {
      sortOrder: -1,
    });*/
  }

}
