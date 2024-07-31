import {
    ByteString,
    Sha256,
    sha256,
    SmartContract,
    assert,
    method,
    prop,
} from 'scrypt-ts'

// every class should have atleast one public function otherwise it will not be compiled
export class Demo extends SmartContract {
    // prop is to be mentioned to bring it onchain
    @prop()
    hash: Sha256

    constructor(hash: Sha256) {
        super(...arguments)
        // this hash is secret message set by the constructor
        this.hash = hash
    }

    @method() // @method is to be mentioned to bring it onchain
    public unlock(message: ByteString) {
        // comparing the hash with the message and throwing error if it is not equal
        assert(sha256(message) == this.hash, 'incorrect hash')
    }
}
