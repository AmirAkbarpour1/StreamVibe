'use server'
import { getPlaiceholder } from 'plaiceholder'
import { Buffer } from 'node:buffer'

async function getbase64(src: string) {
  try {
    const buffer = await fetch(src).then(async res =>
      Buffer.from(await res.arrayBuffer()),
    )

    const { base64 } = await getPlaiceholder(buffer)
    return base64
  }
  catch {
    return ''
  }
}

export default getbase64
