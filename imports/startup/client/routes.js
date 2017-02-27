import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import MainLayout from '../../ui/layouts/body/MainLayout.jsx';
import Home from '../../ui/pages/Home.jsx';
import Gallery from '../../ui/pages/Gallery.jsx';

// Set up all routes in the app
FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: <Home />
    })
  }
});

FlowRouter.route('/gallery', {
  action() {
    mount(MainLayout, {
      content: <Gallery />
    })
  }
});

FlowRouter.notFound = {
  action() {},
};
