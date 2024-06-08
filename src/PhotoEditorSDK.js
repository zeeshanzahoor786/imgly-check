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
        image: 'https://zeeshanportfolio.de/wp-content/uploads/2024/05/img-33s10-1.webp?w=1024', // Ensure this path is correct
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
