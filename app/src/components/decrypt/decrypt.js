import React, { Component } from 'react';
import './decrypt.css'
import CODING from '../coding/coding_func'

class Decrypt extends Component {
    constructor() {
        super();

        this.state = {
            encryptedCode:'',
            decryptedCode:'',
            decrypting: false,
            messageDecrypted: false,
        }
    }

    codeInput(code){
        this.setState({
            encryptedCode: code
        })
    }
    
    decryptingMessage() {
        setTimeout(() => {
          this.setState({
            decrypting: false,
            messageDecrypted: true,
          })
        }, 3000)
      }

    decrypt(stringToDecrypt) {
        let strSplit = stringToDecrypt.toLowerCase().split('');
        let newArray = [];
        let wordCount = 1
              // case strSplit[i] === '7':
      //   strSplit.splice([i], 2);
        for (let i = 0; i < strSplit.length; i++) {
          switch (true) {
            case strSplit[i] === 'c':
                strSplit.splice([i], 2);
                newArray.push('a');
              break;
    
            case strSplit[i] === 'p':
            strSplit.splice([i], 2);
              newArray.push('b');
              break;
    
            case strSplit[i] === 'y':
            strSplit.splice([i], 2);
              newArray.push('c');
              break;
    
            case strSplit[i] === 't':
            strSplit.splice([i], 2);
              newArray.push('d');
              break;
    
            case strSplit[i] === 'w':
            strSplit.splice([i], 2);
              newArray.push('e');
              break;
    
            case strSplit[i] === 'b':
            strSplit.splice([i], 2);
              newArray.push('f');
              break;
    
            case strSplit[i] === 'k':
            strSplit.splice([i], 2);
              newArray.push('g');
              break;
    
            case strSplit[i] === 'q':
            strSplit.splice([i], 2);
              newArray.push('h');
              break;
    
            case strSplit[i] === 'l':
            strSplit.splice([i], 2);
              newArray.push('i');
              break;
    
            case strSplit[i] === 'd':
            strSplit.splice([i], 2);
              newArray.push('j');
              break;
    
            case strSplit[i] === 'm':
            strSplit.splice([i], 2);
              newArray.push('k');
              break;
    
            case strSplit[i] === 'z':
            strSplit.splice([i], 2);
              newArray.push('l');
              break;
    
            case strSplit[i] === 'a':
            strSplit.splice([i], 2);
              newArray.push('m');
              break;
    
            case strSplit[i] === 'f':
            strSplit.splice([i], 2);
              newArray.push('n')
              break;
    
            case strSplit[i] === 'x':
            strSplit.splice([i], 2);
              newArray.push('o');
              break;
    
            case strSplit[i] === 'n':
            strSplit.splice([i], 2);
              newArray.push('p');
              break;
    
            case strSplit[i] === 'h':
            strSplit.splice([i], 2);
              newArray.push('q');
              break;
    
            case strSplit[i] === 'i':
            strSplit.splice([i], 2);
              newArray.push('r');
              break;
    
            case strSplit[i] === 'j':
            strSplit.splice([i], 2);
              newArray.push('s');
              break;
    
            case strSplit[i] === 'g':
            strSplit.splice([i], 2);
              newArray.push('t');
              break;
    
            case strSplit[i] === 'o':
            strSplit.splice([i], 2);
              newArray.push('u');
              break;
    
            case strSplit[i] === 'r':
            strSplit.splice([i], 2);
              newArray.push('v');
              break;
    
            case strSplit[i] === 'e':
            strSplit.splice([i], 2);
              newArray.push('w');
              break;
    
            case strSplit[i] === 'u':
            strSplit.splice([i], 2);
              newArray.push('x');
              break;
    
            case strSplit[i] === 'v':
            strSplit.splice([i], 2);
              newArray.push('y');
              break;
    
            case strSplit[i] === 's':
            strSplit.splice([i], 2);
              newArray.push('z');
              break;
    
            case strSplit[i] === ' ':
              newArray.push(' ');
              break;
    
            case strSplit[i] === '<':
            strSplit.splice([i], 2);
              newArray.push('1');
              break;
    
            case strSplit[i] === '_':
            strSplit.splice([i], 2);
              newArray.push('2');
              break;
    
            case strSplit[i] === '~':
            strSplit.splice([i], 2);
              newArray.push('3');
              break;
    
            case strSplit[i] === '^':
            strSplit.splice([i], 2);
              newArray.push('4');
              break;
    
            case strSplit[i] === '"':
            strSplit.splice([i], 2);
              newArray.push('5');
              break;
    
            case strSplit[i] === '*':
            strSplit.splice([i], 2);
              newArray.push('6');
              break;
    
            case strSplit[i] === '|':
            strSplit.splice([i], 2);
              newArray.push('7');
              break;
    
            case strSplit[i] === '/':
            strSplit.splice([i], 2);
              newArray.push('8');
              break;
    
            case strSplit[i] === ':':
            strSplit.splice([i], 2);
              newArray.push('9');
              break;
    
            case strSplit[i] === '`':
            strSplit.splice([i], 2);
              newArray.push('0');
              break;
    
    
            default:
              newArray.push(strSplit[i]);
          }
    
        }
        this.decryptingMessage();
        this.setState({
          decryptedCode: newArray.join(''),
          decrypting: true,

        })
    
      }

    render() {
        return(
<div>
{this.state.decrypting === false 
    ?
    this.state.messageDecrypted === false
    ?
            <div className='decrypt-body'>
                <div className='creator-code-input-container-decrypted'>
                    <textarea placeholder='Type Message' className='creator-code-input' onChange={(e) => { this.codeInput(e.target.value) }} maxLength='300' />
                    <div className='creator-code-length-tracker'>{`${this.state.encryptedCode.length} / 300`}</div>
                    <button className='creator-code-button' onClick={() => { this.decrypt(this.state.encryptedCode) }}>Decrypt</button>
                </div>

            </div>
                :
                <div className='creator-code-message-decrypted'>
                    <div className='creator-code-message-title-decrypted'>Decrypted Message</div>
                    <div>{this.state.decryptedCode}</div>
                </div>

:
<CODING />
}
            </div>
        )
    }
}

export default Decrypt;