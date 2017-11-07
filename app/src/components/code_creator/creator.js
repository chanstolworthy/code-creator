import React, { Component } from 'react';
import CODING from '../coding/coding_func'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Snackbar from 'material-ui/Snackbar';
import RELOAD from '../../reload.svg'

class Creator extends Component {
  constructor() {
    super();

    this.state = {
      code: '',
      encryptedCode: '',
      totalWords: 0,
      encrypting: false,
      messageEncrypted: false,
      copied: false,
      open: false,
    }
  }
  reload(){
    window.location.reload();
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


  encryptingMessage() {
    setTimeout(() => {
      this.setState({
        encrypting: false,
        messageEncrypted: true,
      })
    }, 3000)
  }

  codeInput(message) {
    this.setState({
      code: message
    })
  }

  encrypt(stringToCode) {
    let strSplit = stringToCode.toLowerCase().split('');
    let newArray = [];
    let wordCount = 1
    for (let i = 0; i < strSplit.length; i++) {
      switch (true) {
        case strSplit[i] === 'a':
          newArray.push('c' + '7' + 'j');
          break;

        case strSplit[i] === 'b':
          newArray.push('p' + '5' + 'a');
          break;

        case strSplit[i] === 'c':
          newArray.push('y' + '2' + 'k');
          break;

        case strSplit[i] === 'd':
          newArray.push('t' + '9' + '~');
          break;

        case strSplit[i] === 'e':
          newArray.push('w' + '3' + '-');
          break;

        case strSplit[i] === 'f':
          newArray.push('b' + '8' + ':');
          break;

        case strSplit[i] === 'g':
          newArray.push('k' + '1' + 'h');
          break;

        case strSplit[i] === 'h':
          newArray.push('q' + '7' + 'r');
          break;

        case strSplit[i] === 'i':
          newArray.push('l' + '8' + '|');
          break;

        case strSplit[i] === 'j':
          newArray.push('d' + '4' + '6');
          break;

        case strSplit[i] === 'k':
          newArray.push('m' + '0' + 'o');
          break;

        case strSplit[i] === 'l':
          newArray.push('z' + '5' + '0');
          break;

        case strSplit[i] === 'm':
          newArray.push('a' + '3' + 'Q');
          break;

        case strSplit[i] === 'n':
          newArray.push('f' + '4' + 'h')
          break;

        case strSplit[i] === 'o':
          newArray.push('x' + '6' + 'D');
          break;

        case strSplit[i] === 'p':
          newArray.push('n' + '1' + 'E');
          break;

        case strSplit[i] === 'q':
          newArray.push('h' + '7' + 'g');
          break;

        case strSplit[i] === 'r':
          newArray.push('i' + '5' + 'y');
          break;

        case strSplit[i] === 's':
          newArray.push('j' + '3' + 'x');
          break;

        case strSplit[i] === 't':
          newArray.push('g' + '9' + 'J');
          break;

        case strSplit[i] === 'u':
          newArray.push('o' + '1' + 'U');
          break;

        case strSplit[i] === 'v':
          newArray.push('r' + '2' + '5');
          break;

        case strSplit[i] === 'w':
          newArray.push('e' + '5' + '6');
          break;

        case strSplit[i] === 'x':
          newArray.push('u' + '0' + 'K');
          break;

        case strSplit[i] === 'y':
          newArray.push('v' + '1' + 'N');
          break;

        case strSplit[i] === 'z':
          newArray.push('s' + '3' + 'O');
          break;

        case strSplit[i] === ' ':
          newArray.push(' ');
          wordCount += 1;
          break;

        case strSplit[i] === '1':
          newArray.push('<' + 'd' + 'T');
          break;

        case strSplit[i] === '2':
          newArray.push('_' + 'Q' + 'O');
          break;

        case strSplit[i] === '3':
          newArray.push('~' + 'b' + '8');
          break;

        case strSplit[i] === '4':
          newArray.push('^' + 'w' + 'L');
          break;

        case strSplit[i] === '5':
          newArray.push('"' + 't' + 'Z');
          break;

        case strSplit[i] === '6':
          newArray.push('*' + 'q' + '9');
          break;

        case strSplit[i] === '7':
          newArray.push('|' + 'x' + 'X');
          break;

        case strSplit[i] === '8':
          newArray.push('/' + 'k' + 'U');
          break;

        case strSplit[i] === '9':
          newArray.push(':' + 'r' + 'l');
          break;

        case strSplit[i] === '0':
          newArray.push('`' + 'p' + '5');
          break;


        default:
          newArray.push(strSplit[i]);
      }

    }
    this.encryptingMessage();
    this.setState({
      encryptedCode: newArray.join(''),
      encrypting: true,
      totalWords: wordCount,
    })

  }
  //   // //   // //   // //   // END OF CODE CREATION //   // //   // //   // //   // //   //

  copyToClip() {
setTimeout(()=>{
this.setState({
  copied: false
})
}, 3000)
  }

  render() {


    return (
      <div>
        {this.state.encrypting === false
          ?
          this.state.messageEncrypted === false
            ?
            <div className='creator-code-input-container'>
              <textarea placeholder='Type Message' className='creator-code-input' onChange={(e) => { this.codeInput(e.target.value) }} maxLength='300' />
              <div className='creator-code-length-tracker'>{`${this.state.code.length} / 300`}</div>
              <button className='creator-code-button' onClick={() => { this.encrypt(this.state.code) }}>Encrypt</button>
            </div>

            :
            <div className='creator-code-input-container'>
              <div className='creator-code-message-original'>
                <div className='creator-code-message-title-original'>Message</div>
                <div>{this.state.code}</div>

              </div>
              <div className='creator-code-message-encrypted'>
                <div className='creator-code-message-title-encrypted'>Encrypted Message
                    <div className='copied-to-clipboard-alert'>Click Text To Copy</div>
                    </div>
                <CopyToClipboard text={this.state.encryptedCode} onCopy={() => this.setState({ copied: true })}>
                  <div>
                    <div className='code-to-copy' onClick={()=>{this.handleTouchTap()}}>{this.state.encryptedCode}</div>
                 
                  </div>
                </CopyToClipboard>
              </div>
              <div className='creator-code-result'>
                <div className='creator-code-item-container'>
                  <div className='creator-code-actual-result-1'>{this.state.code.length}</div>
                  <div className='creator-code-actual-title-1'>Character Count</div>
                </div>
                <div className='creator-code-item-container'>
                  <div className='creator-code-actual-result-1'>{this.state.encryptedCode.length}</div>
                  <div className='creator-code-actual-title-1'>Encrypted Character Count</div>
                </div>
                <div className='creator-code-item-container'>
                  <div className='creator-code-actual-result-1'>{this.state.totalWords}</div>
                  <div className='creator-code-actual-title-1'>Word Count</div>
                </div>
                <div className='reload-cont creator-code-item-container'>
<img src={RELOAD} onClick={()=>{this.reload()}} className='reload-logo' />
<div className='creator-code-actual-title-1'>Reload Page</div>
</div>
                <Snackbar
          open={this.state.open}
          message="Message Copied"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
              </div>
   
            </div>

          :
          <CODING />
        }
      </div>
    )
  }
}

export default Creator;
