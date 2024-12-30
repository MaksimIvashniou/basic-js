const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    return this.#transformMessage(
      message.toUpperCase(),
      key.toUpperCase(),
      true
    );
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    return this.#transformMessage(
      message.toUpperCase(),
      key.toUpperCase(),
      false
    );
  }

  #transformMessage(message, key, action) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let skippedChars = 0;

    let transformedMessage = message.split('').map((char, index) => {
      const charIndex = alphabet.indexOf(char);

      if (charIndex === -1) {
        skippedChars++;
        return char;
      }

      const keyIndex = alphabet.indexOf(
        key[(index - skippedChars) % key.length]
      );

      return alphabet[
        (charIndex + keyIndex * (action ? 1 : -1) + alphabet.length) %
          alphabet.length
      ];
    });

    if (!this.isDirect) transformedMessage = transformedMessage.reverse();

    return transformedMessage.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
