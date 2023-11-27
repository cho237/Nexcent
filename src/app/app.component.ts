import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nexcent';
  clients: any = [
    {
      img: 'Logo_1.svg',
    },
    {
      img: 'Logo_3.svg',
    },
    {
      img: 'Logo_4.svg',
    },
    {
      img: 'Logo_5.svg',
    },
    {
      img: 'Logo_6.svg',
    },
    {
      img: 'Logo_7.svg',
    },
    {
      img: 'Logo_8.svg',
    },
  ];

  communities: any = [
    {
      img: 'i1.svg',
      title: 'Membership Organisations',
      p: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      img: 'i2.svg',
      title: 'National Associations',
      p: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      img: 'i3.svg',
      title: 'Clubs And Groups',
      p: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ];

  members: any = [
    {
      number: '2,245,341',
      img: 'y1.svg',
      title: 'Members',
    },
    {
      number: '46,328',
      img: 'y2.svg',
      title: 'Event Bookings',
    },
    {
      number: '828,867',
      img: 'y3.svg',
      title: 'Clubs',
    },
    {
      number: '1,926,436',
      img: 'y1.svg',
      title: 'Payments',
    },
  ];

  marketing: any = [
    {
      p: 'Creating Streamlined  Processes with OneRen',
      img: 'image1.svg',
    },
    {
      p: 'What are your safeguarding responsibilities and how? responsibilities',
      img: 'image2.svg',
    },
    {
      p: 'Revamping the Membership Model with Triathlon Australia',
      img: 'image3.svg',
    },
  ];
}
