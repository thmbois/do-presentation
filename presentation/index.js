// Import React
import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import QRCode from '../assets/QRCode';
import ReactPlayer from 'react-player';

import Shipdex from '../assets/Shipdex';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Image,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  playstore: require('../assets/playstore.png'),
  appstore: require('../assets/appstore.png'),
  snack: require('../assets/Snack-expo.png')
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Dokumentenstrukturen
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            React Native - Expo.io - GraphCMS
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Layout>
            <Fill>
              <Image width="50%" src={images.playstore} />
              <QRCode
                bgColor="rgba(0,0,0,0)"
                value="https://play.google.com/store/apps/details?id=host.exp.exponent&amp;referrer=www"
                size="256"
                showLink={false}
              />
            </Fill>
            <Fill>
              <Image width="50%" src={images.appstore} />
              <QRCode
                bgColor="rgba(0,0,0,0)"
                value="https://itunes.apple.com/app/apple-store/id982107779?pt=17102800&amp;ct=www&amp;mt=8"
                size="256"
                showLink={false}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Expo.io</Heading>
          <List>
            <ListItem>Mobile Deployment Tool</ListItem>
            <ListItem>Ohne Xcode oder Android Studio</ListItem>
            <ListItem>Expo SDK</ListItem>
            <ListItem>UI Components</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.snack} transition={['fade']} bgColor="primary" textColor="tertiary">
        </Slide>
        <Slide transition={['fade']} bgColor="quartenary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>GraphCMS</Heading>
          <List>
            <ListItem>GraphQL</ListItem>
            <ListItem>Headless CMS</ListItem>
            <ListItem>Rich Content APIs</ListItem>
            <ListItem>Template oder Frontend sind egal</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="quartenary" textColor="tertiary">
          <Layout>
            <video src='https://graphcms.com/assets/mp4/graphcms_intro_x2_xl.mp4' width="100%" height="100%" loop="true" controls="true"/>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" caps>Shipdex</Heading>
          <QRCode
            bgColor="rgba(0,0,0,0)"
            value="https://snack.expo.io/SkHBfXxTx"
            size="256"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Shipdex />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" caps>BBQ-App</Heading>
          <QRCode bgColor="rgba(0,0,0,0)" value="xx" size="256" />
        </Slide>
      </Deck>
    );
  }
}
