export default async function withErrorHandling<T>(
  fn: (...args: any[]) => Promise<T>,
): Promise<T> {
  try {
    return await fn()
  }
  catch (error: unknown) {
    console.error(error)
    throw new Error('Something went wrong. Please try again later.')
  }
}
