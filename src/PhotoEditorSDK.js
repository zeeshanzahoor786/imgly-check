import React from 'react';
import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk';

export class PhotoEditorSDK extends React.Component {
  componentDidMount() {
    this.initEditor();
  }

  async initEditor() {
    try {
      const editor = await PhotoEditorSDKUI.init({
        container: '#editor',
        image: 'https://scontent-dus1-1.xx.fbcdn.net/v/t1.6435-9/60992462_2213087365449973_2094429806778122240_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=T7FXknXsn-8Q7kNvgEWyxvd&_nc_ht=scontent-dus1-1.xx&oh=00_AYApu68K0g8dfgRlqO0SiThl2KPLQGqg4HZpngZf2JoX9A&oe=668C41DF', // Ensure this path is correct
        license: '', // Add your license key here if required
      });
      console.log('PhotoEditorSDK for Web is ready!');
      editor.on(UIEvent.EXPORT, (imageSrc) => {
        console.log('Exported', imageSrc);
      });
    } catch (error) {
      console.error('Error initializing PhotoEditorSDK:', error);
    }
  }

  render() {
    return <div id="editor" style={{ width: '100vw', height: '100vh' }}></div>;
  }
}
