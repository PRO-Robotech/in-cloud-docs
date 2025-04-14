import axios from 'axios'

const BASE_URL_TAG = process.env.Docusaurus_GIT_API_URL_TAG
const BASE_URL_STAR = process.env.Docusaurus_GIT_API_URL_STAR


export const getLatestTag = async (): Promise<string | null> => {
  try {
    const { data } = await axios.get<{ name: string }[]>(`${BASE_URL_TAG}`)
    return data[0]?.name || null
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error)
    return null
  }
}

export const getStarsAndForks = async (): Promise<{ stars: number; forks: number } | null> => {
  try {
    const { data } = await axios.get<{ stargazers_count: number; forks: number }>(BASE_URL_STAR)
    return {
      stars: data.stargazers_count,
      forks: data.forks,
    }
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error)
    return null
  }
}
