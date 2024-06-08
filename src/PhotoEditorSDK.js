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
        image: 'https://assets-global.website-files.com/5ff596e2ff1e2cb058273601/5ff6f081b3652544a4404d4a_img.ly_team_final.jpg', // Ensure this path is correct
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
