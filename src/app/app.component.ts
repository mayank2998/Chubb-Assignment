import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  cards = [
    {
      title : "Free",
      price : "$0",
      details : {
        users : "Single User",
        storage : "5GB Storage",
        publicProjects : "Unlimited Public Projects",
        access : "Community Access",
        privateProjects : "Unlimited Private Projects",
        isprivateProjectsEnabled : false,
        phoneSupport : "Dedicated Phone Support",
        isphoneSupportEnabled : false,
        subDomain : "Free Subdomain",
        issubDomainEnabled : false,
        statusReport : "Monthly Status Reports",
        isstatusReportEnabled : false
      }
    },
    {
      title : "Plus",
      price : "$9",
      details : {
        users : "5 Single User",
        storage : "50GB Storage",
        publicProjects : "Unlimited Public Projects",
        access : "Community Access",
        privateProjects : "Unlimited Private Projects",
        isprivateProjectsEnabled : true,
        phoneSupport : "Dedicated Phone Support",
        isphoneSupportEnabled : true,
        subDomain : "Free Subdomain",
        issubDomainEnabled : true,
        statusReport : "Monthly Status Reports",
        isstatusReportEnabled : false
      }

    },
    {
      title : "Pro",
      price : "$49",
      details : {
        users : "Unlimited User",
        storage : "150GB Storage",
        publicProjects : "Unlimited Public Projects",
        access : "Community Access",
        privateProjects : "Unlimited Private Projects",
        isprivateProjectsEnabled : true,
        phoneSupport : "Dedicated Phone Support",
        isphoneSupportEnabled : true,
        subDomain : "Free Subdomain",
        issubDomainEnabled : true,
        statusReport : "Monthly Status Reports",
        isstatusReportEnabled : true
      }

    }
  ]
}
