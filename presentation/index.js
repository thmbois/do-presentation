// Import React
import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import QRCode from '../assets/QRCode';

import Expo from '../assets/Expo';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
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
require('./index.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  playstore: require('../assets/playstore.png'),
  appstore: require('../assets/appstore.png'),
  snack: require('../assets/Snack-expo.png'),
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
                value="https://play.google.com/store/apps/details?id=host.exp.exponent&amp;referrer=www"
                showLink={false}
              />
            </Fill>
            <Fill>
              <Image width="50%" src={images.appstore} />
              <QRCode
                value="https://itunes.apple.com/app/apple-store/id982107779?pt=17102800&amp;ct=www&amp;mt=8"
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
        <Slide
          bgImage={images.snack}
          transition={['fade']}
          bgColor="primary"
          textColor="tertiary"
        />
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
            <video
              src="https://graphcms.com/assets/mp4/graphcms_intro_x2_xl.mp4"
              width="100%"
              height="100%"
              loop="true"
              controls="true"
            />
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Selbst gebautes Backend vs. SaaS
          </Heading>
          <Layout>
            <Fill>
              <Link
                target="_blank"
                href="https://bbq-server.dev.jonas-faber.me/graphiql"
              >
                Eigenes Backend
              </Link>
              <Link
                target="_blank"
                href="https://bbq-admin.dev.jonas-faber.me/recipes"
              >
                Eigenes Dashboard
              </Link>
            </Fill>
            <Fill>
              <Link
                target="_blank"
                href="https://app.graphcms.com/cj0dvo3fj5gjw0152us8wvo3k/content"
              >
                GraphCMS
              </Link>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            BBQ-Recipes (hidden publish)
          </Heading>
          <QRCode value="exp://exp.host/@flexzuu/bbq-recipes" />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Filmdex</Heading>
          <QRCode value="https://snack.expo.io/HyUbJcM6g" />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          code={require('raw-loader!../assets/Stardex.example')}
          ranges={[
            { loc: [0, 999], title: 'Walking through some code' },
            { loc: [0, 1], title: 'Libs', note: 'react' },
            { loc: [1, 7], title: 'Libs', note: 'react-native' },
            { loc: [7, 8], title: 'Libs', note: 'expo' },
            { loc: [8, 9], title: 'Libs', note: 'styled-components' },
            { loc: [10, 22], note: 'Functional-Component' },
            { loc: [23, 38], note: 'Functional-Component' },
            { loc: [38, 39], note: 'Class-Component' },
            { loc: [39, 42], note: 'State' },
            { loc: [43, 46], note: 'lifecycle-hook' },
            { loc: [47, 48], note: 'new await syntax' },
            { loc: [48, 62], note: 'graphql-query als string-literal' },
            { loc: [62, 75], note: 'post request mittels fetch api' },
            {
              loc: [75, 79],
              note: 'speichern des ergebnisses als json in state',
            },
            { loc: [82, 101], note: 'irrellevante Componenten für Header' },
            {
              loc: [101, 115],
              note: 'weitergabe des state an die einzelnen Filme',
            },
            {
              loc: [142, 148],
              note: 'Styling mittles css, flexbox und styled-components',
            },
          ]}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Filmdex (hidden publish)
          </Heading>
          <QRCode value="exp://exp.host/@flexzuu/filmdex" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Repos:
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            Web
          </Heading>
          <Code>https://github.com/do-ws-2016/bbq-web</Code>
          <Heading size={6} textColor="secondary" caps>
            old App
          </Heading>
          <Code>https://github.com/do-ws-2016/do-ws-2016-app</Code>

        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Repos:
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            new App
          </Heading>
          <Code>https://github.com/do-ws-2016/bbq-recipes</Code>
          <Heading size={6} textColor="secondary" caps>
            Server
          </Heading>
          <Code>https://github.com/do-ws-2016/do-ws-2016</Code>
          <Heading size={6} textColor="secondary" caps>
            filmdex
          </Heading>
          <Code>https://github.com/thmbois/filmdex</Code>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="quartenary"
          textColor="secondary"
        />
      </Deck>
    );
  }
}
