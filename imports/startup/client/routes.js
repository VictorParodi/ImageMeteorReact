import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import MainLayout from '../../ui/layouts/body/MainLayout.jsx';
import Home from '../../ui/pages/Home.jsx';
import Gallery from '../../ui/pages/Gallery.jsx';
import HeaderGallery from '../../ui/components/HeaderGallery.jsx';
import SignupForm from '../../ui/components/SignupForm.jsx';
import LoginForm from '../../ui/components/LoginForm.jsx';

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
      topContent: <HeaderGallery />,
      content: <Gallery />
    })
  }
});

FlowRouter.route('/signup', {
  action() {
    mount(MainLayout, {
      content: <SignupForm />
    })
  }
});

FlowRouter.route('/login', {
  action() {
    mount(MainLayout, {
      content: <LoginForm />
    })
  }
});

FlowRouter.notFound = {
  action() {},
};
