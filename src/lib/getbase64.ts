'use server'
import { getPlaiceholder } from 'plaiceholder'
import { Buffer } from 'node:buffer'

async function getbase64(src: string) {
  const buffer = await fetch(src).then(async res =>
    Buffer.from(await res.arrayBuffer()),
  )

  const { base64 } = await getPlaiceholder(buffer)
  return base64
}

export default getbase64
