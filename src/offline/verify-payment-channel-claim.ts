import keypairs = require('divvy-keypairs')
import binary = require('divvy-binary-codec')
import {validate, xdvToDrops} from '../common'

function verifyPaymentChannelClaim(channel: string, amount: string,
  signature: string, publicKey: string
): string {
  validate.verifyPaymentChannelClaim({channel, amount, signature, publicKey})

  const signingData = binary.encodeForSigningClaim({
    channel: channel,
    amount: xdvToDrops(amount)
  })
  return keypairs.verify(signingData, signature, publicKey)
}

export default verifyPaymentChannelClaim
