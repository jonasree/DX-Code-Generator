import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { Button, TamaguiProvider, XStack, YStack, Input , Separator, H1, Label} from 'tamagui'

import config from './tamagui.config'

import domtoimage from 'dom-to-image';

import { useWindowDimensions } from 'react-native';

import RenderHtml, { HTMLElementModel, HTMLContentModel } from 'react-native-render-html';

let currentUrl = window.location.href;

let regex = /[?&]([^=#]+)=([^&#]*)/g,
  params = {},
  match;
while (match = regex.exec(currentUrl)) {
  params[match[1]] = match[2];
}

var dx;

switch(params['iso']+params['frames']+params['tolerance']){


// 36 Frame Films with tolerance 1

  case  '100361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '50361':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
    case '25361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '32361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '40361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '64361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '80361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '125361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '160361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '200361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '250361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '320361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '400361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '500361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '640361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '800361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '1000361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '1250361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '1600361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '2000361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '2500361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '3200361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '4000361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '5000361':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;

// 12 Frame Films with tolerance 1

    case  '100121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '50121':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
    case '25121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '32121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '40121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '64121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '80121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '125121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '160121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '200121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '250121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '320121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '400121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '500121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '640121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '800121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '1000121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '1250121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '1600121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '2000121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '2500121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '3200121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '4000121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '5000121':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;


    // 24 Frame Films with tolerance 1

    case  '100241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '50241':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
    case '25241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '32241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '40241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '64241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '80241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '125241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '160241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '200241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '250241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '320241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '400241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '500241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '640241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '800241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '1000241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '1250241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '1600241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '2000241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '2500241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '3200241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '4000241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;
    case '5000241':
    dx = {
      html: `
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      </div>
      <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:white; "></div>
      <div style="height: 100px; width: 100px; background-color:black; "></div>
    
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      </div>`
    };
    break;


    // 24 Frame Films with tolerance 2

    case  '100242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '50242':
        dx = {
          html: `
          <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
            <div style="height: 100px; width: 100px; background-color:white; "></div>
            <div style="height: 100px; width: 100px; background-color:white; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
            <div style="height: 100px; width: 100px; background-color:white; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
          </div>
          <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        
            <div style="height: 100px; width: 100px; background-color:white; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
          </div>`
        };
        break;
      case '25242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '32242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '40242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '64242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '80242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '125242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '160242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '200242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '250242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '320242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '400242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '500242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '640242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '800242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '1000242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '1250242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '1600242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '2000242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '2500242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '3200242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '4000242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '5000242':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;


      // 36 Frame Films with tolerance 2

    case  '100362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '50362':
        dx = {
          html: `
          <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
            <div style="height: 100px; width: 100px; background-color:white; "></div>
            <div style="height: 100px; width: 100px; background-color:white; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
            <div style="height: 100px; width: 100px; background-color:white; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
          </div>
          <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
            <div style="height: 100px; width: 100px; background-color:white; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
            <div style="height: 100px; width: 100px; background-color:white; "></div>
        
            <div style="height: 100px; width: 100px; background-color:white; "></div>
            <div style="height: 100px; width: 100px; background-color:black; "></div>
          </div>`
        };
        break;
      case '25362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '32362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '40362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '64362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '80362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '125362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '160362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '200362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '250362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '320362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '400362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '500362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '640362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '800362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '1000362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '1250362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '1600362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '2000362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '2500362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '3200362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '4000362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;
      case '5000362':
      dx = {
        html: `
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:white; "></div>
        </div>
        <div style="height:100px; width: 600px; flex-direction: row; background-color:white;">
        <div style="height: 100px; width: 100px; background-color:white; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:black; "></div>
        <div style="height: 100px; width: 100px; background-color:white; "></div>
      
          <div style="height: 100px; width: 100px; background-color:white; "></div>
          <div style="height: 100px; width: 100px; background-color:black; "></div>
        </div>`
      };
      break;

      default:
        dx = {
          html: '<h1 style="color: white;">not supported Arguments</h1>'
        }
}

export const Root = () => {

  function btnDL() {

    domtoimage.toJpeg(document.getElementsByTagName('div')[8], { quality: 0.95 })
      .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'dx.jpeg';
          link.href = dataUrl;
          link.click();
      });
  };

  function ImageToPrint(source)
    {
        return "<html><head></head><body>\n" +
                "<page style='background: white; display: block; margin: 0 auto; margin-bottom: 0.5cm; width: 21cm; height: 29.7cm; '><img style='width: 3.3cm; border-style: dotted;' src='" + source + "' /></page></body></html>";
    }

  function btnPrint() {

    domtoimage.toJpeg(document.getElementsByTagName('div')[8], { quality: 0.95 })
      .then(function (dataUrl) {
        document.write(ImageToPrint(dataUrl));
        setTimeout(window.print,10);
      });
  };

  function refresh(){
    currentUrl = '?tolerance='+(document.getElementById('tolerance')as HTMLInputElement).value+'&iso='+(document.getElementById('ISO') as HTMLInputElement).value+'&frames='+(document.getElementById('frames') as HTMLInputElement).value+''
    window.location.href = currentUrl;
  }

  function showImg(){
    domtoimage.toJpeg(document.getElementsByTagName('div')[8], { quality: 0.95 })
      .then(function (dataUrl) {
        document.write(dataUrl);
      });
  }

  const { width } = useWindowDimensions();
  return (
    <TamaguiProvider config={config} defaultTheme="light">

      

      <YStack f={1} ai="center" >
      <H1 marginVertical={60}>DX-Code Generator by @jonasree</H1>
      <Label htmlFor="ISO">ISO (eg 100, 200, 400)</Label>
      <Input id="ISO" size="$4" width="$18" borderWidth={2} placeholder='ISO Speed' defaultValue={params['iso']} />
      <Separator />
      <XStack height={100} alignItems="center">

        <YStack>

        <Label htmlFor="frames">Frames (eg 24, 36)</Label>
        <Input id="frames" size="$4" width="$10" borderWidth={2} placeholder='Frames' defaultValue={params['frames']}/>
        </YStack>
        <Separator alignSelf="stretch" vertical marginHorizontal={15} />
        <YStack>

        <Label htmlFor="tolerance">Tolerance (eg 1 for -0,5 to +0,5 | 2 for -1 to +1)</Label>
        <Input id="tolerance" size="$4" width="$10" borderWidth={2} placeholder='Tolerance' defaultValue={params['tolerance']}/>

        </YStack>
        <Button onPress={refresh} >Refresh</Button>
      </XStack>

    <RenderHtml source={dx} contentWidth={width} />
    
    <XStack height={100} alignItems="center">

      <Button size="$4" onPress={btnDL} >Download</Button>
        <Separator alignSelf="stretch" vertical marginHorizontal={15} borderColor={"transparent"}/>
      <Button size="$4" onPress={btnPrint}>Print</Button>
        <Separator alignSelf="stretch" vertical marginHorizontal={15} borderColor={"transparent"}/>
      <Button size="$4" onPress={showImg}>Show Image</Button>

    </XStack>

    </YStack>

    
    </TamaguiProvider>
    
  )
  
}
