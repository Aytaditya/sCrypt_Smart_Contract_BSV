import { SmartContract, assert, method, prop } from 'scrypt-ts'

export class Multiply extends SmartContract {
    @prop()
    product: bigint

    constructor(product: bigint) {
        super(...arguments)
        this.product = product
    }

    @method()
    public unlock(multiplicand: bigint, multiplier: bigint) {
        assert(multiplicand * multiplier == this.product, 'incorrect product')
    }
}
